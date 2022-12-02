package com.example.btlltnc.Model;

import com.example.btlltnc.Base.BaseModel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Collection;

@Entity
@Table(name = "room")
@NoArgsConstructor
@Getter
@Setter
public class Room extends BaseModel {
    private String name;
    private Integer rowRoom;
    private Integer columnRoom;
}
