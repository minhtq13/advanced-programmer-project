package com.example.btlltnc.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FilmDTO {
    @NotNull
    private String name;
    private String nameFilm;
    private Integer duration;
    private String category;
    private String img;
    private StringBuilder link;
    private Integer age;
    private String type;
    private Integer hot;
    private String nameCinema;
    private StringBuilder description;
    private String director;
    private StringBuilder actor;
    private String language;
    private String premiereDate;
}
