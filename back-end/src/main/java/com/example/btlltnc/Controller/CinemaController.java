package com.example.btlltnc.Controller;

import com.example.btlltnc.Base.BaseController;
import com.example.btlltnc.Model.Cinema;
import com.example.btlltnc.Repository.CinemaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping(value = "/cinema")
@CrossOrigin(allowedHeaders = "*")
public class CinemaController extends BaseController<Cinema, CinemaRepository> {
    @Autowired
    public CinemaRepository repository;

    @Override
    public CinemaRepository get() {
        return repository;
    }

    @GetMapping(path = "/findByName")
    public ResponseEntity<?> findByName(@RequestParam(name="name", required = false) String name, HttpServletRequest request){
        return ResponseEntity.ok(repository.findCinemaByName(name));
    }

    @GetMapping(path = "/findByCity")
    public ResponseEntity<?> findByCity(@RequestParam(name="city", required = false) String city, HttpServletRequest request){
        return ResponseEntity.ok(repository.findCinemaByCity(city));
    }
}
