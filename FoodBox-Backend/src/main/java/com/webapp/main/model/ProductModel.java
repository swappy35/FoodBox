package com.webapp.main.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.transaction.annotation.EnableTransactionManagement;

@Entity
@Table(name = "PRODUCT")
@EnableTransactionManagement
public class ProductModel {
	
	@Id
	@Column(name = "ID")
	private int ProductId;
	
	@Column(name = "Name")
	private String ProductName;
	
	@Column(name = "Quantity")
	private int ProductQuantity; 
	
	@Column(name = "Time")
	private String CookingTime;
	
	@Column(name = "Price")
	private float ProductPrice;
	
	@Column(name = "ImageUrl")
	private String ImageUrl;
	
	@Column(name = "Description")
	private String ProductDescription;

	public int getProductId() {
		return ProductId;
	}

	public void setProductId(int productId) {
		ProductId = productId;
	}

	public String getProductName() {
		return ProductName;
	}

	public void setProductName(String productName) {
		ProductName = productName;
	}

	public int getProductQuantity() {
		return ProductQuantity;
	}

	public void setProductQuantity(int productQuantity) {
		ProductQuantity = productQuantity;
	}

	public String getCookingTime() {
		return CookingTime;
	}

	public void setCookingTime(String cookingTime) {
		CookingTime = cookingTime;
	}

	public float getProductPrice() {
		return ProductPrice;
	}

	public void setProductPrice(float productPrice) {
		ProductPrice = productPrice;
	}

	public String getImageUrl() {
		return ImageUrl;
	}

	public void setImageUrl(String imageUrl) {
		ImageUrl = imageUrl;
	}

	public String getProductDescription() {
		return ProductDescription;
	}

	public void setProductDescription(String productDescription) {
		ProductDescription = productDescription;
	}

	public ProductModel(int productId, String productName, int productQuantity, String cookingTime, float productPrice,
			String imageUrl, String productDescription) {
		super();
		ProductId = productId;
		ProductName = productName;
		ProductQuantity = productQuantity;
		CookingTime = cookingTime;
		ProductPrice = productPrice;
		ImageUrl = imageUrl;
		ProductDescription = productDescription;
	}

	public ProductModel() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "ProductModel [ProductId=" + ProductId + ", ProductName=" + ProductName + ", ProductQuantity="
				+ ProductQuantity + ", CookingTime=" + CookingTime + ", ProductPrice=" + ProductPrice + ", ImageUrl="
				+ ImageUrl + ", ProductDescription=" + ProductDescription + "]";
	}
	
	
	
	
	
	
}
