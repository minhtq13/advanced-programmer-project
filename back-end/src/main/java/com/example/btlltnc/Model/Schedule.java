package com.example.btlltnc.Model;

import com.example.btlltnc.Base.BaseModel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "schedule")
@NoArgsConstructor
@Getter
@Setter
public class Schedule extends BaseModel{
    private String nameFilm;
    private String nameCinema;
    private String day;
    private String time;
    private String animation;
    private Integer soldOut;

}
