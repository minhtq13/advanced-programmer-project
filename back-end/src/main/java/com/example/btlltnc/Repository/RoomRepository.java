package com.example.btlltnc.Repository;

import com.example.btlltnc.Base.BaseRepository;
import com.example.btlltnc.Model.Room;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RoomRepository extends BaseRepository<Room> {
    @Query(value="from Room room where room.name= ?1")
    List<Room> findRoomByName(String name);

    @Query(value="from Room room where room.nameCinema= ?1")
    List<Room> findRoomByNameCinema(String nameCinema);

    @Query(value="from Room room where (room.nameCinema= ?1 and room.name=?2)")
    List<Room> findRoomByNameCinemaAndName(String nameCinema, String name);

    @Query(value="from Room room where room.rowRoom= ?1")
    List<Room> findRoomByRowRoom(Integer rowRoom);
}
