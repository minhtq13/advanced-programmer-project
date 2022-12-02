package com.example.btlltnc.Repository;

import com.example.btlltnc.Base.BaseRepository;
import com.example.btlltnc.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface UserRepository extends BaseRepository<User> {
    @Query(value="from User user where user.username= ?1")
    List<User> findUsersByUsername(String username);

    @Modifying
    @Transactional
    @Query(value="update User user set user.password= :password where user.username = :username")
    void updatePasswordByUsername(String username, String password);

    @Query(value = "from User user where (user.username=?1 and user.password=?2)")
    List<User> findByUsernameAndPassword(String username, String password);

    @Query(value = "from User user where (user.username=?1 and user.type=?2)")
    List<User> findByUsernameAndType(String username, Integer type);
}
