package com.example.btlltnc.Repository;

import com.example.btlltnc.Base.BaseRepository;
import com.example.btlltnc.Model.Ticket;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TicketRepository extends BaseRepository<Ticket> {
    @Query(value = "from Ticket ticket where ( ticket.rowTicket=?1 and ticket.columnTicket=?2)")
    List<Ticket> findTicketByRowAndColumn(String rowTicket, Integer columnTicket);

    @Query(value = "from Ticket ticket where ( ticket.nameUser=?1)")
    List<Ticket> findTicketByUser(String nameUser);

    @Query(value = "from Ticket ticket where ( ticket.nameFilm=?1)")
    List<Ticket> findTicketByFilm(String nameFilm);

    @Query(value = "from Ticket ticket where ( ticket.nameCinema=?1)")
    List<Ticket> findTicketByCinema(String nameCinema);

    @Query(value = "from Ticket ticket where ( ticket.nameRoom=?1)")
    List<Ticket> findTicketByRoom(String nameRoom);

    @Query(value = "from Ticket ticket where ( ticket.nameCinema=?1 and ticket.nameFilm=?2 and ticket.rowTicket=?3 and ticket.columnTicket=?4)")
    List<Ticket> findTicketByCinemaFilmRowColumn(String nameCinema, String nameFilm, String rowTicket, Integer columnTicket);

    @Query(value = "from Ticket ticket where ( ticket.nameCinema=?1 and ticket.nameUser=?2)")
    List<Ticket> findTicketByNameCinemaAndNameUser(String nameCinema, String nameUser);

    @Query(value = "from Ticket ticket where ( ticket.nameCinema=?1 and ticket.nameUser=?2 and ticket.nameFilm=?3)")
    List<Ticket> findTicketByNameCinemaAndNameUserAndNameFilm(String nameCinema, String nameUser, String nameFilm);
}
