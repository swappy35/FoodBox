package com.webapp.main.repository;

//import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.webapp.main.model.ProductModel;

@CrossOrigin("*")
@Repository
public interface ProductRepository extends JpaRepository<ProductModel, Long>{
	
//	@Query("SELECT p FROM ProductModel p WHERE p.productID = ?1")
//	Optional<ProductModel> findById(java.lang.Integer id);
}
