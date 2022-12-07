package com.example.btlltnc.Model;

import com.example.btlltnc.Base.BaseModel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "film")
@NoArgsConstructor
@Getter
@Setter
public class Film extends BaseModel {
    private String name;
    private Integer duration;
    private String category;
    private String img;
    private String link;
    private Integer age;
    private String type;
    private Integer hot;
    private String nameCinema;
    private String extend;
}