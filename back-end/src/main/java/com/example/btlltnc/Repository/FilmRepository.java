package com.example.btlltnc.Repository;

import com.example.btlltnc.Base.BaseRepository;
import com.example.btlltnc.Model.Film;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface FilmRepository  extends BaseRepository<Film> {
    @Query(value="from Film film where film.name= ?1")
    List<Film> findFilmsByName(String name);

    @Query(value="from Film film where film.nameCinema= ?1")
    List<Film> findFilmsByNameCinema(String nameCinema);

    @Query(value="from Film film where (film.nameCinema= ?1 and film.name= ?2)")
    List<Film> findFilmsByNameCinemaAndName(String nameCinema, String name);
}
