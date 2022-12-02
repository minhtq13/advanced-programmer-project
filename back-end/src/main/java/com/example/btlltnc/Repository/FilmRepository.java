package com.example.btlltnc.Repository;

import com.example.btlltnc.Base.BaseRepository;
import com.example.btlltnc.Model.Film;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface FilmRepository  extends BaseRepository<Film> {
    @Query(value="from Film name where name.name= ?1")
    List<Film> findFilmsByName(String name);
}
