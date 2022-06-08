package com.webapp.main.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Entity
@JsonIgnoreProperties
@Table(name = "product_tbl")
@EnableTransactionManagement
public class ProductModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "product_id")
	private Long productId;
	
	@Column(name = "product_name")
	private String productName;
	
	@Column(name = "product_quantity")
	private int productQuantity; 
	
	@Column(name = "cooking_time")
	private String cookingTime;
	
	@Column(name = "product_price")
	private float productPrice;
	
	@Column(name = "image_url")
	private String imageUrl;
	
	@Column(name = "product_description")
	private String productDescription;

	public ProductModel() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ProductModel(String productName, int productQuantity, String cookingTime, float productPrice,
			String imageUrl, String productDescription) {
		super();
		this.productName = productName;
		this.productQuantity = productQuantity;
		this.cookingTime = cookingTime;
		this.productPrice = productPrice;
		this.imageUrl = imageUrl;
		this.productDescription = productDescription;
	}

	public Long getProductId() {
		return productId;
	}

	public void setProductId(Long productId) {
		this.productId = productId;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public int getProductQuantity() {
		return productQuantity;
	}

	public void setProductQuantity(int productQuantity) {
		this.productQuantity = productQuantity;
	}

	public String getCookingTime() {
		return cookingTime;
	}

	public void setCookingTime(String cookingTime) {
		this.cookingTime = cookingTime;
	}

	public float getProductPrice() {
		return productPrice;
	}

	public void setProductPrice(float productPrice) {
		this.productPrice = productPrice;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public String getProductDescription() {
		return productDescription;
	}

	public void setProductDescription(String productDescription) {
		this.productDescription = productDescription;
	}

	@Override
	public String toString() {
		return "ProductModel [productId=" + productId + ", productName=" + productName + ", productQuantity="
				+ productQuantity + ", cookingTime=" + cookingTime + ", productPrice=" + productPrice + ", imageUrl="
				+ imageUrl + ", productDescription=" + productDescription + "]";
	}
	
}
