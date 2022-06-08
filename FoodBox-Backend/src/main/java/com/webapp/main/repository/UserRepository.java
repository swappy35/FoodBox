package com.webapp.main.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.webapp.main.model.UserModel;

@CrossOrigin("*")
@Repository
public interface UserRepository extends JpaRepository<UserModel, Long>{
	@Query("SELECT r FROM UserModel r WHERE r.userRole = ?1")
	List<UserModel> findByuserRole(String userRole);
	
	@Query("SELECT e FROM UserModel e WHERE e.userEmail = ?1")
	List<UserModel> findByuserEmail(String userEmail);
}
