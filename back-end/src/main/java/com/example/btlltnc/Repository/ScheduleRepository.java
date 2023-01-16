package com.example.btlltnc.Repository;

import com.example.btlltnc.Base.BaseRepository;
import com.example.btlltnc.DTO.ScheduleDTO;
import com.example.btlltnc.Model.Schedule;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ScheduleRepository extends BaseRepository<Schedule> {
    @Query(value = "from Schedule schedule where schedule.nameFilm=?1")
    List<Schedule> findScheduleByNameFilm(String nameFilm);

    @Query(value = "from Schedule schedule where (schedule.nameCinema= ?1 and schedule.day=?2)")
    List<Schedule> findScheduleByNameCinemaAndDay(String nameCinema, String day);

    @Query(value = "from Schedule schedule where (schedule.nameCinema= ?1)")
    List<Schedule> findScheduleByNameCinema(String nameCinema);
}
