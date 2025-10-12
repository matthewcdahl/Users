package com.matthewdahl.User_Service.repository;

import com.matthewdahl.User_Service.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    // Optional: add custom queries like findByEmail if needed
}
