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
}
