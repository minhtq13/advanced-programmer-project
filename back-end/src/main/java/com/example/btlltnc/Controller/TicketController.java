package com.example.btlltnc.Controller;

import com.example.btlltnc.Base.BaseController;
import com.example.btlltnc.Model.Ticket;
import com.example.btlltnc.Repository.TicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Optional;

@RestController
@RequestMapping(value = "/ticket")
@CrossOrigin(allowedHeaders = "*")
public class TicketController extends BaseController<Ticket, TicketRepository> {
    @Autowired
    public TicketRepository repository;

    @Override
    public TicketRepository get() {
        return repository;
    }

    @GetMapping(path = "/findByRowAndColumn")
    public ResponseEntity<?> findByRowAndColumn(@RequestParam(name="rowTicket", required = false) Integer rowTicket, @RequestParam(name="columnTicket",required = false) Integer columnTicket, HttpServletRequest request){
        return ResponseEntity.ok(repository.findTicketByRowAndColumn(rowTicket,columnTicket));
    }
    @GetMapping(path = "/findByUsers")
    public ResponseEntity<?> findByUsers(@RequestParam(name="nameUser", required = false) String nameUser, HttpServletRequest request){
        return ResponseEntity.ok(repository.findTicketdByUser(nameUser));
    }
}
