package com.example.btlltnc.Model;

import com.example.btlltnc.Base.BaseModel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "cinema")
@NoArgsConstructor
@Getter
@Setter
public class Cinema extends BaseModel {
    private String name;
    private String city;
    private String address;
    private String ìmg;
    private String Hot;
    private String phoneNumber;
}
