package com.example.btlltnc.Repository;

import com.example.btlltnc.Base.BaseRepository;
import com.example.btlltnc.Model.Cinema;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CinemaRepository extends BaseRepository<Cinema>{
    @Query(value="from Cinema cinema where cinema.name= ?1")
    Cinema findCinemaByName(String name);

    @Query(value="from Cinema cinema where cinema.city= ?1")
    List<Cinema> findCinemaByCity(String city);
}
