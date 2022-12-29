package com.example.btlltnc.Controller;

import com.example.btlltnc.Base.BaseController;
import com.example.btlltnc.Model.Film;
import com.example.btlltnc.Repository.FilmRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping(value = "/film")
@CrossOrigin(allowedHeaders = "*")
public class FilmController extends BaseController<Film, FilmRepository> {
    @Autowired
    public FilmRepository repository;

    @Override
    public FilmRepository get() {
        return repository;
    }

    @GetMapping(path = "/findByName")
    public ResponseEntity<?> findByName(@RequestParam(name="nameFilm", required = false) String nameFilm, HttpServletRequest request){
        return ResponseEntity.ok(repository.findFilmsByNameFilm(nameFilm));
    }

    @GetMapping(path = "/findByNameCinema")
    public ResponseEntity<?> findByNameCinema(@RequestParam(name="nameCinema", required = false) String nameCinema, HttpServletRequest request){
        return ResponseEntity.ok(repository.findFilmsByNameCinema(nameCinema));
    }

    @GetMapping(path = "/findByNameCinemaAndName")
    public ResponseEntity<?> findByNameCinemaAndName(@RequestParam(name="nameCinema", required = false) String nameCinema, @RequestParam(name="nameFilm", required = false) String nameFilm, HttpServletRequest request){
        return ResponseEntity.ok(repository.findFilmsByNameCinemaAndNameFilm(nameCinema, nameFilm));
    }

    @GetMapping(path = "/findByNameCinemaAndType")
    public ResponseEntity<?> findByNameCinemaAndType(@RequestParam(name="nameCinema", required = false) String nameCinema, @RequestParam(name="type", required = false) String type, HttpServletRequest request){
        return ResponseEntity.ok(repository.findFilmsByNameCinemaAndType(nameCinema, type));
    }
}
