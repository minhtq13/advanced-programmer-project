package com.example.btlltnc.Model;

import com.example.btlltnc.Base.BaseModel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.*;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.time.ZonedDateTime;

@Entity
@Table(name = "ticket")
@NoArgsConstructor
@Getter
@Setter
public class Ticket extends BaseModel {
    private String nameFilm;
    private String nameRoom;
    private String nameUser;
    private String nameCinema;
    private Integer fare;
    private String rowTicket;
    private Integer columnTicket;
    private String date;
    private String time;
}
