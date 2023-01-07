package com.example.btlltnc.Controller;

import com.example.btlltnc.Base.BaseController;
import com.example.btlltnc.Utils.AES;
import com.example.btlltnc.Model.User;

import com.example.btlltnc.Repository.UserRepository;
import com.example.btlltnc.DTO.UserPasswordDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import javax.servlet.http.HttpServletRequest;


@RestController
@RequestMapping(value = "/users")
@CrossOrigin("http://localhost:3000/")
//@CrossOrigin(allowedHeaders = "*")
public class UserController extends BaseController<User, UserRepository> {
    @Autowired
    public UserRepository repository;

    @Override
    public UserRepository get() {
        return repository;
    }

    @GetMapping(path = "/findByUsernameAndPassword")
    public ResponseEntity<?> findByUserNameAndPassword(@RequestParam(name = "username", required = false) String username, @RequestParam(name = "password", required = false) String password, HttpServletRequest request) {
        password = AES.encrypt(password);
        return ResponseEntity.ok(repository.findByUsernameAndPassword(username, password));
    }

    @GetMapping(path = "/findByUsername")
    public ResponseEntity<?> findByUsername(@RequestParam(name = "username", required = false) String username, HttpServletRequest request) {
        return ResponseEntity.ok(repository.findUsersByUsername(username));
    }

    @PutMapping("/updatePassword")
    public void updatePassword(@RequestBody UserPasswordDTO userPasswordDTO) {
        String password = AES.encrypt(userPasswordDTO.getPassword());
        repository.updatePasswordByUsername(userPasswordDTO.getUsername(), password);
    }
}
