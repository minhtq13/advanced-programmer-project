package com.example.btlltnc.Repository;

import com.example.btlltnc.Base.BaseRepository;
import com.example.btlltnc.Model.Ticket;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TicketRepository extends BaseRepository<Ticket> {
    @Query(value = "from Ticket ticket where ( ticket.rowTicket=?1 and ticket.columnTicket=?2)")
    List<Ticket> findTicketByRowAndColumn(Integer rowTicket, Integer columnTicket);

    @Query(value = "from Ticket ticket where ( ticket.nameUser=?1)")
    List<Ticket> findTicketdByUser(String nameUser);
}
