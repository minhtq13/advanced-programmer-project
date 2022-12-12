package com.example.btlltnc.command;

import de.triology.cb.Command;
import lombok.Getter;

import javax.validation.constraints.NotNull;

@Getter
public class LoginCommand implements Command<LoginResponse> {

    @NotNull
    private String username;

    @NotNull
    private String password;

}
