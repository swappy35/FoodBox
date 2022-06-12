package com.webapp.FoodBox_Testing;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class CustomerRegister {
	
	WebDriver driver;
	
	@Test (priority = 0 , description = "[Setup] Home page")
	public void Setup() throws InterruptedException {
		System.setProperty("webdriver.chrome.driver", "chromedriver.exe");
				
		driver = new ChromeDriver();
		driver.get("http://localhost:4200/home");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10000, TimeUnit.MILLISECONDS);

		Thread.sleep(4000);
	}
	
	@Test (priority = 1 , description = "Register page")
	public void CustRegister() throws InterruptedException {

		WebElement registerBtn = driver.findElement(By.xpath("//a[@routerlink ='/register']"));
		registerBtn.click();

		WebElement firstName = driver.findElement(By.id("firstName"));
		firstName.sendKeys("John");

		WebElement lastName = driver.findElement(By.id("lastName"));
		lastName.sendKeys("Doe");

		WebElement email = driver.findElement(By.id("email"));
		email.sendKeys("john@gmail.com");

		WebElement password = driver.findElement(By.id("password"));
		password.sendKeys("John@123");

		Thread.sleep(4000);

		WebElement submitBtn = driver.findElement(By.xpath("//button[@type ='submit']"));
		submitBtn.click();
		Thread.sleep(4000);

	}
	
	@Test (priority = 3 , description = " Register page close")
	public void TearDown() {
		driver.close();
	}

}
