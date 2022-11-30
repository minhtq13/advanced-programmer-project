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
    private String date;
    private Integer time;
    private String nameRoom;
    private String nameFilm;
}
