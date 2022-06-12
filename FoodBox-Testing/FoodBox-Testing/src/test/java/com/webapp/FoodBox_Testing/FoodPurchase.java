package com.webapp.FoodBox_Testing;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class FoodPurchase {

	WebDriver driver;
	
	@Test (priority = 12 , description = "[Setup] Home page")
	public void Setup() throws InterruptedException {
		System.setProperty("webdriver.chrome.driver", "chromedriver.exe");
				
		driver = new ChromeDriver();
		driver.get("http://localhost:4200");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10000, TimeUnit.MILLISECONDS);

		Thread.sleep(4000);
	}
	
	@Test (priority = 13 , description = "[Login page] customer positive scenerio")
	public void CustLoginSuccess() throws InterruptedException {

		WebElement registerBtn = driver.findElement(By.xpath("//a[@routerlink ='/login']"));
		registerBtn.click();
		
		WebElement email = driver.findElement(By.xpath("//input[@id='userEmail']"));
		email.sendKeys("john@gmail.com");

		WebElement password = driver.findElement(By.xpath("//input[@id='userPassword']"));
		password.sendKeys("John@123");
		
		WebElement radioBtn = driver.findElement(By.xpath("//input[@value='customer']"));
		radioBtn.click();

		WebElement submitBtn = driver.findElement(By.xpath("//button[@type ='submit']"));
		submitBtn.click();
		Thread.sleep(2000);
	}
	
	@Test (priority = 14 , description = "[Products page]")
	public void ProductPage() throws InterruptedException {

		WebElement prodBtn = driver.findElement(By.xpath("//a[@routerlink ='/products']"));
		prodBtn.click();
		
		Thread.sleep(2000);
	}
	
	@Test (priority = 15 , description = "[Products page] Search bar")
	public void SearchBar() throws InterruptedException {

		WebElement searchBar = driver.findElement(By.xpath("//input[@placeholder='Search Products']"));
		searchBar.sendKeys("pizz");
		
		Thread.sleep(2000);
	}
	
	@Test (priority = 16 , description = "[Products page] Select product")
	public void SelectProd() throws InterruptedException {
		
		WebElement select1 = driver.findElement(By.xpath("//div/ul/li/a/div[@id='name'][contains(text(),'Chicken Pizza')]"
				+ "//following::div/button[contains(text(), 'Add To Cart')]"));
		select1.click();
		
		Thread.sleep(2000);
		
		WebElement searchBar = driver.findElement(By.xpath("//input[@placeholder='Search Products']"));
		searchBar.clear();
		searchBar.sendKeys("mo");
		
		Thread.sleep(2000);
		
		WebElement select2 = driver.findElement(By.xpath("//div/ul/li/a/div[@id='name'][contains(text(),'Mojito')]"
				+ "//following::div/button[contains(text(), 'Add To Cart')]"));
		select2.click();
		
		Thread.sleep(2000);
	}
	
	@Test (priority = 17 , description = "[Cart page]")
	public void Cart() throws InterruptedException {
		
		WebElement cart = driver.findElement(By.xpath("//span[@id='cart']"));
		cart.click();
		
		Thread.sleep(2000);
	}
	
	@Test (priority = 18 , description = "[Checkout page]")
	public void CheckOut() throws InterruptedException {
		
		WebElement checkOut = driver.findElement(By.xpath("//button[contains(text(),'Checkout')]"));
		checkOut.click();
		
		WebElement firstName = driver.findElement(By.xpath("//input[@id='firstName']"));
		firstName.sendKeys("John");
		
		WebElement lastName = driver.findElement(By.xpath("//input[@id='lastName']"));
		lastName.sendKeys("Doe");	
		
		WebElement email = driver.findElement(By.xpath("//input[@id='email']"));
		email.sendKeys("john@gmail.com");	
		
		WebElement contactNo = driver.findElement(By.xpath("//input[@id='contactNo']"));
		contactNo.sendKeys("9876543210");	
		
		WebElement flatNo = driver.findElement(By.xpath("//input[@id='flatNo']"));
		flatNo.sendKeys("A1-401");	
		
		WebElement societyName = driver.findElement(By.xpath("//input[@id='societyName']"));
		societyName.sendKeys("Kumar Pappilon");
		
		WebElement area = driver.findElement(By.xpath("//input[@id='area']"));
		area.sendKeys("Pashan");
		
		WebElement pinCode = driver.findElement(By.xpath("//input[@id='pinCode']"));
		pinCode.sendKeys("777777");
		
		WebElement nameOnCard = driver.findElement(By.xpath("//input[@id='nameOnCard']"));
		nameOnCard.sendKeys("John Doe");
		
		WebElement cardNumber = driver.findElement(By.xpath("//input[@id='cardNumber']"));
		cardNumber.sendKeys("654198746321");
		
		WebElement cardExpiration = driver.findElement(By.xpath("//input[@id='cardExpiration']"));
		cardExpiration.sendKeys("07/26");
		
		WebElement cvv = driver.findElement(By.xpath("//input[@id='cvv']"));
		cvv.sendKeys("333");
		
		Thread.sleep(2000);
		
		WebElement ScrollTo = driver.findElement(By.xpath("//div[contains(text(),'Place Your Order')]"));
		JavascriptExecutor jsObj = (JavascriptExecutor) driver;
		jsObj.executeScript("arguments[0].scrollIntoView()", ScrollTo);
		
		Thread.sleep(2000);
		
		WebElement placeOrder = driver.findElement(By.xpath("//div[contains(text(),'Place Your Order')]"));
		placeOrder.click();
		
		Thread.sleep(2000);
	}
	
	
	@Test (priority = 19 , description = " Login page close")
	public void TearDown() {
		driver.close();
	}
}
