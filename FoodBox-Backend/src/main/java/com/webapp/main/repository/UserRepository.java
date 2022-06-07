package com.webapp.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.webapp.main.model.UserModel;

public interface UserRepository extends JpaRepository<UserModel, Long>{

}
