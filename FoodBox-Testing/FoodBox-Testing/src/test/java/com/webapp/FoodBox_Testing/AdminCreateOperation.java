package com.webapp.FoodBox_Testing;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class AdminCreateOperation {
	
	WebDriver driver;
	
	@Test (priority = 20 , description = "[Setup] Home page")
	public void Setup() throws InterruptedException {
		System.setProperty("webdriver.chrome.driver", "chromedriver.exe");
				
		driver = new ChromeDriver();
		driver.get("http://localhost:4200/home");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10000, TimeUnit.MILLISECONDS);

		Thread.sleep(4000);
	}
	
	@Test (priority = 21 , description = "[Login page] admin")
	public void AdmLogin() throws InterruptedException {
		
		WebElement loginBtn = driver.findElement(By.xpath("//a[@routerlink ='/login']"));
		loginBtn.click();
		Thread.sleep(800);
		
		WebElement email = driver.findElement(By.xpath("//input[@id='userEmail']"));
		email.sendKeys("ramu@gmail.com");
		Thread.sleep(800);
		
		WebElement password = driver.findElement(By.xpath("//input[@id='userPassword']"));
		password.sendKeys("Ramu@123");
		Thread.sleep(800);
		
		WebElement radioBtn = driver.findElement(By.xpath("//input[@value='admin']"));
		radioBtn.click();
		Thread.sleep(1200);
		
		WebElement submitBtn = driver.findElement(By.xpath("//button[@type ='submit']"));
		submitBtn.click();
		driver.navigate().refresh();
		Thread.sleep(1200);
		
	}
	
	@Test (priority = 22 , description = "[Login page] admin")
	public void ProductManagement() throws InterruptedException {
		
		WebElement productManagementBtn = driver.findElement(By.xpath("//a[@routerlink ='/product-management']"));
		productManagementBtn.click();
		Thread.sleep(800);
		
		WebElement createBtn = driver.findElement(By.xpath("//a[@routerlink ='/product-management/create']"));
		createBtn.click();
		Thread.sleep(800);
		
		WebElement productName = driver.findElement(By.xpath("//input[@id='productName']"));
		productName.sendKeys("Pav Bhaji");
		Thread.sleep(800);
		
		WebElement productPrice = driver.findElement(By.xpath("//input[@id='productPrice']"));
		productPrice.sendKeys("30");
		Thread.sleep(800);

		WebElement cookingTime = driver.findElement(By.xpath("//input[@id='cookingTime']"));
		cookingTime.sendKeys("5-10 min");
		Thread.sleep(800);
		
		WebElement imageUrl = driver.findElement(By.xpath("//input[@id='imageUrl']"));
		imageUrl.sendKeys("pav-bhaji.png");
		Thread.sleep(800);
		
		WebElement productDescription = driver.findElement(By.xpath("//textarea[@id='productDescription']"));
		productDescription.sendKeys("Famous marathi dish. Lorem ipsum dolor sit amet consectetur adipisicing elit. "
				+ "Ducimus debitis eum cumque. Libero laborum inventore tempora saepe repellat tenetur officia.");
		Thread.sleep(800);
		
		WebElement submitBtn = driver.findElement(By.xpath("//button[@type='submit']"));
		submitBtn.click();
		Thread.sleep(800);
		
	    JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollBy(0,document.body.scrollHeight)");
		Thread.sleep(4000);
		
	}
	
	@Test (priority = 23 , description = " Login page close")
	public void TearDown()throws InterruptedException{
		WebElement createBtn = driver.findElement(By.xpath("//a[contains(text(),'LOG OUT')]"));
		createBtn.click();
		driver.navigate().refresh();
		Thread.sleep(1200);
		driver.close();
	}
}
