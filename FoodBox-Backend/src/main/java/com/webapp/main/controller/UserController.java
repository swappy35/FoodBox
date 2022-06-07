package com.webapp.main.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.webapp.main.model.UserModel;
import com.webapp.main.repository.UserRepository;

@RestController
@RequestMapping("/foodbox/users")
public class UserController {
	
	@Autowired
	UserRepository user_repo;
	
	@PostMapping("/user/add")
	public UserModel postUserAdd(@RequestBody UserModel user) {
		return user_repo.save(user);
	}
	
	@GetMapping(value = "/display/all")
	public List<UserModel> getUsers(){
		List<UserModel> customer = (List<UserModel>) user_repo.findAll();
		return customer;
	}
	
	// Get Customer by emailId
	@GetMapping("/search/emailId/{userRole}")
	public List<UserModel> getUserByRole(@PathVariable String userRole) {
		return user_repo.findByuserRole(userRole);
	}
}
