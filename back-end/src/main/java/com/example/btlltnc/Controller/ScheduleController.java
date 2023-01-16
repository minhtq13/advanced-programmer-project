package com.example.btlltnc.Controller;

import com.example.btlltnc.Base.BaseController;
import com.example.btlltnc.DTO.ScheduleDTO;
import com.example.btlltnc.Model.Film;
import com.example.btlltnc.Model.Schedule;
import com.example.btlltnc.Repository.FilmRepository;
import com.example.btlltnc.Repository.ScheduleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/schedule")
@CrossOrigin(allowedHeaders = "*")
public class ScheduleController extends BaseController<Schedule, ScheduleRepository> {
    @Autowired
    public ScheduleRepository repository;
    @Autowired
    public FilmRepository filmRepository;

    @Override
    public ScheduleRepository get() {
        return repository;
    }

    @GetMapping(path = "/findByNameFilm")
    public ResponseEntity<?> findByNameFilmAndNameRoom(@RequestParam(name="nameFilm", required = false) String nameFilm, HttpServletRequest request){
        return ResponseEntity.ok(repository.findScheduleByNameFilm(nameFilm));
    }

    @GetMapping(path = "/findByNameCinemaAndDay")
    public ResponseEntity<?> findByNameCinemaAndDay(@RequestParam(name="nameCinema", required = false) String nameCinema, @RequestParam(name="day", required = false) String day, HttpServletRequest request){
        List<Schedule> listSchedule = repository.findScheduleByNameCinemaAndDay(nameCinema, day);
        List<ScheduleDTO> listScheduleDto = new ArrayList<>();
        for (int i = 0; i < listSchedule.size(); i++) {
            ScheduleDTO scheduleDTO = new ScheduleDTO(listSchedule.get(i).getId(),listSchedule.get(i).getNameFilm(),listSchedule.get(i).getNameCinema(),listSchedule.get(i).getDay(),listSchedule.get(i).getTime(),listSchedule.get(i).getAnimation(),listSchedule.get(i).getSoldOut());
            listScheduleDto.add(scheduleDTO);
        }
        for (int i = 0; i <listScheduleDto.size(); i++) {
            listScheduleDto.get(i).setFilm(getFilmByFilmName(listScheduleDto.get(i).getNameFilm()));
        }
        return ResponseEntity.ok(listScheduleDto);
    }
    public Film getFilmByFilmName(String name){
        List<Film> list  = filmRepository.findFilmsByNameFilm(name);
        return list.get(0);
    }

    @GetMapping(path = "/findByNameCinema")
    public ResponseEntity<?> findByNameCinema(@RequestParam(name="nameCinema", required = false) String nameCinema, HttpServletRequest request){
        return ResponseEntity.ok(repository.findScheduleByNameCinema(nameCinema));
    }
}
