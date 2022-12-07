package com.example.btlltnc.Controller;

import com.example.btlltnc.Base.BaseController;
import com.example.btlltnc.Model.Room;
import com.example.btlltnc.Repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Optional;

@RestController
@RequestMapping(value = "/room")
@CrossOrigin(allowedHeaders = "*")
public class RoomController extends BaseController<Room, RoomRepository> {
    @Autowired
    public RoomRepository repository;

    @Override
    public RoomRepository get() {
        return repository;
    }

    @GetMapping(path = "/findByName")
    public ResponseEntity<?> findByName(@RequestParam(name="name", required = false) String name, HttpServletRequest request){
        return ResponseEntity.ok(repository.findRoomByName(name));
    }

    @GetMapping(path = "/findByNameCinema")
    public ResponseEntity<?> findByNameCinema(@RequestParam(name="nameCinema", required = false) String nameCinema, HttpServletRequest request){
        return ResponseEntity.ok(repository.findRoomByNameCinema(nameCinema));
    }

    @GetMapping(path = "/findByNameCinemaAndName")
    public ResponseEntity<?> findByNameCinemaAndName(@RequestParam(name="nameCinema", required = false) String nameCinema, @RequestParam(name="name", required = false) String name, HttpServletRequest request){
        return ResponseEntity.ok(repository.findRoomByNameCinemaAndName(nameCinema, name));
    }
}
