package com.example.btlltnc.DTO;

import com.example.btlltnc.Model.Film;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@NoArgsConstructor
@Getter
@Setter
public class ScheduleDTO {
    private Long id;
    private String nameFilm;
    private String nameCinema;
    private String day;
    private String time;
    private String animation;
    private Integer soldOut;
    private Film film;

    public ScheduleDTO(Long id,String nameFilm, String nameCinema, String day, String time, String animation, Integer soldOut) {
        this.id=id;
        this.nameFilm = nameFilm;
        this.nameCinema = nameCinema;
        this.day = day;
        this.time = time;
        this.animation = animation;
        this.soldOut = soldOut;

    }

}
