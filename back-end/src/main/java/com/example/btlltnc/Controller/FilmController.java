package com.example.btlltnc.Controller;

import com.example.btlltnc.Base.BaseController;
import com.example.btlltnc.DTO.FilmDTO;
import com.example.btlltnc.DTO.response.ResponseDTO;
import com.example.btlltnc.Model.Film;
import com.example.btlltnc.Repository.FilmRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
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
    @PostMapping(path = "/add-film")
    public ResponseEntity<?> addFilm(@RequestBody @Validated FilmDTO filmDTO ) {
        try {
            Film film = new Film();
            BeanUtils.copyProperties(filmDTO, film);
            repository.save(film);
            return ResponseEntity.status(200).body(new ResponseDTO(200, "Add film successfully!"));
        } catch (Exception exception){
            return ResponseEntity.status(400).body(new ResponseDTO(400, "Add film fail!"));
        }
    }
    @PutMapping(path="/update-film")
    public ResponseEntity<?> updateFilm(@RequestBody FilmDTO filmDTO, @RequestParam(name="id") Long id) {
        try {
            Film film = repository.findById(id).orElse(null);
            if(film == null) return ResponseEntity.status(404).body(new ResponseDTO(404,"Film not found !"));
            BeanUtils.copyProperties(filmDTO, film);
            repository.save(film);
            return ResponseEntity.status(200).body(new ResponseDTO(200, "Update film successfully!"));
        } catch (Exception exception){
            return ResponseEntity.status(400).body(new ResponseDTO(400, "Update film fail!"));
        }
    }
    @DeleteMapping(path="/delete-film")
    public ResponseEntity<?> deleteFilm(@RequestParam(name="id") Long id) {
        try {
            Film film = repository.findById(id).orElse(null);
            if(film == null) return ResponseEntity.status(404).body(new ResponseDTO(404,"Film not found !"));
            repository.delete(film);
            return ResponseEntity.status(200).body(new ResponseDTO(200, "Delete film successfully!"));
        } catch (Exception exception){
            return ResponseEntity.status(400).body(new ResponseDTO(400, "Delete film fail!"));
        }
    }
}
