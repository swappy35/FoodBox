package com.webapp.FoodBox_Testing;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class CustomerLogin {
	
	WebDriver driver;
	
	@Test (priority = 4 , description = "[Setup] Home page")
	public void Setup() throws InterruptedException {
		System.setProperty("webdriver.chrome.driver", "chromedriver.exe");
				
		driver = new ChromeDriver();
		driver.get("http://localhost:4200/home");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10000, TimeUnit.MILLISECONDS);

		Thread.sleep(4000);
	}
	
	@Test (priority = 6 , description = "[Login page] customer positive scenerio")
	public void CustLoginSuccess() throws InterruptedException {

		WebElement registerBtn = driver.findElement(By.xpath("//a[@routerlink ='/login']"));
		registerBtn.click();

		Thread.sleep(2000);
		driver.navigate().refresh();
		
		WebElement email = driver.findElement(By.xpath("//input[@id='userEmail']"));
		email.sendKeys("john@gmail.com");

		WebElement password = driver.findElement(By.xpath("//input[@id='userPassword']"));
		password.sendKeys("John@123");
		
		WebElement radioBtn = driver.findElement(By.xpath("//input[@value='customer']"));
		radioBtn.click();


		WebElement submitBtn = driver.findElement(By.xpath("//button[@type ='submit']"));
		submitBtn.click();
		Thread.sleep(4000);

	}
	
	@Test (priority = 5 , description = "[Login page] customer negative scenerio")
	public void CustLoginFail() throws InterruptedException {

		WebElement registerBtn = driver.findElement(By.xpath("//a[@routerlink ='/login']"));
		registerBtn.click();
		

		WebElement email = driver.findElement(By.xpath("//input[@id='userEmail']"));
		email.sendKeys("xyz@gmail.com");

		WebElement password = driver.findElement(By.xpath("//input[@id='userPassword']"));
		password.sendKeys("Xyz@123");
		
		WebElement radioBtn = driver.findElement(By.xpath("//input[@value='customer']"));
		radioBtn.click();

		WebElement submitBtn = driver.findElement(By.xpath("//button[@type ='submit']"));
		submitBtn.click();
		Thread.sleep(4000);

	}
	
	@Test (priority = 7 , description = " Register page close")
	public void TearDown() {
		driver.close();
	}
}
