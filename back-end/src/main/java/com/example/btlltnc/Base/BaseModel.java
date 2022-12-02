package com.example.btlltnc.Base;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@MappedSuperclass
public abstract class BaseModel {
    public BaseModel(){
    }
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;
}
