package com.example.btlltnc.Controller;

import com.example.btlltnc.command.LoginCommand;
import de.triology.cb.CommandBus;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000/")
@RequiredArgsConstructor
@RequestMapping("/auth")
public class AuthenticationController {

    private final CommandBus commandBus;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginCommand command) {
        return ResponseEntity.ok(commandBus.execute(command));
    }

}
