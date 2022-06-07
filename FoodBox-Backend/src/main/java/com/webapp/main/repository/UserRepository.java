package com.webapp.main.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.webapp.main.model.UserModel;

@Repository
public interface UserRepository extends JpaRepository<UserModel, Long>{
	@Query("SELECT r FROM UserModel r WHERE r.userRole = ?1")
	List<UserModel> findByuserRole(String userRole);
}
