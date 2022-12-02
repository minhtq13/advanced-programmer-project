package com.example.btlltnc.Model;

import com.example.btlltnc.Base.BaseModel;
import com.example.btlltnc.Utils.AES;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.ZonedDateTime;

@Entity
@Table(name = "users")
@NoArgsConstructor
@Getter
@Setter
public class User extends BaseModel {
    private String username;
    private String password;
    private String fullName;
    private String email;
    private Integer gender;
    private ZonedDateTime birthday;
    private Integer type;
    public void setPassword(String password) {
        this.password = AES.encrypt(password);
    }
}
