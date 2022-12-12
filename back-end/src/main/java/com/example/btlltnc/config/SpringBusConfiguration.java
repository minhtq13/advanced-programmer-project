package com.example.btlltnc.config;

import de.triology.cb.Command;
import de.triology.cb.CommandBus;
import de.triology.cb.spring.Registry;
import de.triology.cb.spring.SpringCommandBus;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

import javax.validation.ConstraintViolation;
import javax.validation.Validator;
import java.util.HashSet;
import java.util.Set;

@Configuration
@RequiredArgsConstructor
@SuppressWarnings({"unchecked", "rawtypes"})
public class SpringBusConfiguration {

    @Bean
    public CommandBus commandBus(ApplicationContext applicationContext) {
        return new SpringCommandBusCustomizer(new RegistryCustomizer(applicationContext));
    }

    public interface SpringBusValidator<C extends Command> {
        void validate(C c);
    }

    public static class SpringCommandBusCustomizer extends SpringCommandBus {

        private final RegistryCustomizer registryCustomizer;

        public SpringCommandBusCustomizer(RegistryCustomizer registry) {
            super(registry);
            this.registryCustomizer = registry;
        }

        @Override
        public <R, C extends Command<R>> R execute(C command) {
            for (SpringBusValidator validator : registryCustomizer.getSpringBusValidators()) {
                validator.validate(command);
            }
            return super.execute(command);
        }
    }

    @Slf4j
    public static class RegistryCustomizer extends Registry {

        @Getter
        private final Set<SpringBusValidator<?>> springBusValidators = new HashSet<>();

        public RegistryCustomizer(ApplicationContext applicationContext) {
            super(applicationContext);
            this.registrySpringBusValidator(applicationContext.getBeanNamesForType(SpringBusValidator.class), applicationContext);
        }

        private void registrySpringBusValidator(String[] classesName, ApplicationContext applicationContext) {
            for (String className : classesName) {
                Class<SpringBusValidator<?>> handlerClass = (Class<SpringBusValidator<?>>) applicationContext.getType(className);
                assert handlerClass != null;
                this.springBusValidators.add(applicationContext.getBean(handlerClass));
            }
        }
    }

    @Slf4j
    @Component
    public static class SpringBusValidatorImpl implements SpringBusValidator {

        @Setter(onMethod = @__({@Autowired}))
        private Validator validator;

        @Override
        public void validate(Command command) {
            Set<ConstraintViolation<Command>> violations = validator.validate(command);
            for (ConstraintViolation<Command> violation : violations) {
                //TODO: throw exception
                log.error(violation.getMessage());
            }
        }
    }

}
