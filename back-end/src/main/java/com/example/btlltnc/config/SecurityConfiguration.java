package com.example.btlltnc.config;

import com.example.btlltnc.Repository.UserRepository;
import com.example.btlltnc.Utils.AES;
import com.example.btlltnc.Utils.JwtUtils;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.StringUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.persistence.EntityNotFoundException;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
@RequiredArgsConstructor
public class SecurityConfiguration {

    private final UserRepository userRepository;
    private final JwtUtils jwtUtils;

    @Bean
    public WebSecurityCustomizer webSecurityCustomizer() {
        return (web) -> web.ignoring()
                .antMatchers("/auth/login")
                .antMatchers("/cinema")
                .antMatchers("/film")
                .antMatchers("/film/findByNameCinema")
                .antMatchers("/schedule");
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .cors().disable()
                .csrf().disable()
                .authorizeRequests()
                .antMatchers(HttpMethod.POST, "/users")
                .permitAll()
                .and()
                .authorizeRequests()
                .anyRequest()
                .authenticated()
                .and()
                .addFilterBefore(JwtFilter.of(jwtUtils), UsernamePasswordAuthenticationFilter.class)
                .httpBasic(Customizer.withDefaults())
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
        ;

        return http.build();
    }

    @Bean
    public AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(this.userDetailsService());
        authProvider.setPasswordEncoder(this.passwordEncoder());
        return authProvider;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new PasswordEncodeImpl();
    }

    @Bean
    public UserDetailsService userDetailsService() {
        return username -> this.userRepository.findByUsername(username).orElseThrow(EntityNotFoundException::new);
    }

    @RequiredArgsConstructor(staticName = "of")
    public static class JwtFilter extends OncePerRequestFilter {

        private final JwtUtils jwtUtils;

        @Override
        protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
            String jwt = resolveToken(request);
            if (StringUtils.isNoneBlank(jwt) && this.jwtUtils.validateToken(jwt)) {
                Authentication authentication = this.jwtUtils.getAuthentication(jwt);
                SecurityContextHolder.getContext().setAuthentication(authentication);
            }
            filterChain.doFilter(request, response);
        }

        private String resolveToken(HttpServletRequest request) {
            String bearerToken = request.getHeader(HttpHeaders.AUTHORIZATION);
            if (StringUtils.isNoneBlank(bearerToken) && bearerToken.startsWith("Bearer ")) {
                return bearerToken.substring(7);
            }
            return null;
        }
    }

    private static class PasswordEncodeImpl implements PasswordEncoder {

        @Override
        public String encode(CharSequence rawPassword) {
            return AES.encrypt(rawPassword.toString());
        }

        @Override
        public boolean matches(CharSequence rawPassword, String encodedPassword) {
            return StringUtils.equals(AES.encrypt(rawPassword.toString()), encodedPassword);
        }

    }

}
