package com.example.btlltnc.command;

import com.example.btlltnc.Utils.JwtUtils;
import de.triology.cb.CommandHandler;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LoginHandler implements CommandHandler<LoginResponse, LoginCommand> {

    private final AuthenticationProvider authenticationProvider;
    private final JwtUtils jwtUtils;

    @Override
    public LoginResponse handle(LoginCommand command) {
        this.validate(command);
        Authentication authentication = authenticationProvider.authenticate(new UsernamePasswordAuthenticationToken(command.getUsername(), command.getPassword()));
        String token = jwtUtils.createToken(authentication);

        return LoginResponse.of(token);
    }

    private void validate(LoginCommand command) {
    }
}
