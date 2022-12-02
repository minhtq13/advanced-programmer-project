package com.example.btlltnc.Base;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BaseRepository<Entity extends BaseModel> extends JpaRepository<Entity,Long> {
}
