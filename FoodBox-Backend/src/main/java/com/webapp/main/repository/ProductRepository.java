package com.webapp.main.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.webapp.main.model.ProductModel;

public interface ProductRepository extends JpaRepository<ProductModel, Integer>{
	
	@Query("SELECT p FROM ProductModel p WHERE p.productID = ?1")
	List<ProductModel> findById(String id);
}
