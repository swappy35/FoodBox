package com.webapp.main.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.webapp.main.model.ProductModel;
import com.webapp.main.repository.ProductRepository;

@RestController
@RequestMapping("/foodbox/products")
public class ProductController {

	@Autowired
	ProductRepository prod_repo;

	@PostMapping(value = "/product/add")
	public ProductModel postProductAdd(@RequestBody ProductModel product) {
		return prod_repo.save(product);
	}
	
	@GetMapping(value = "/display/all")
	public List<ProductModel> getCustomers(){
		List<ProductModel> customer = (List<ProductModel>) prod_repo.findAll();
		return customer;
	}
	
	@GetMapping(value = "/search/id/{id}")
	public Optional<ProductModel> getProduct(@PathVariable int id) {
		return prod_repo.findById(id);
	}

}
