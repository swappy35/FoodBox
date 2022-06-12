package com.webapp.FoodBox_Testing;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class AdminLogin {
	
	WebDriver driver;
	
	@Test (priority = 8 , description = "[Setup] Home page")
	public void Setup() throws InterruptedException {
		System.setProperty("webdriver.chrome.driver", "chromedriver.exe");
				
		driver = new ChromeDriver();
		driver.get("http://localhost:4200/home");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10000, TimeUnit.MILLISECONDS);

		Thread.sleep(4000);
	}
	
	
	@Test (priority = 9 , description = "[Login page] admin negative scenerio")
	public void AdmLoginFail() throws InterruptedException {

		WebElement loginBtn = driver.findElement(By.xpath("//a[@routerlink ='/login']"));
		loginBtn.click();
		

		WebElement email = driver.findElement(By.xpath("//input[@id='userEmail']"));
		email.sendKeys("xyz@gmail.com");

		WebElement password = driver.findElement(By.xpath("//input[@id='userPassword']"));
		password.sendKeys("Xyz@123");
		
		WebElement radioBtn = driver.findElement(By.xpath("//input[@value='admin']"));
		radioBtn.click();

		WebElement submitBtn = driver.findElement(By.xpath("//button[@type ='submit']"));
		submitBtn.click();
		Thread.sleep(4000);

	}
	
	@Test (priority = 10 , description = "[Login page] admin positive scenerio")
	public void AdmLoginSuccess() throws InterruptedException {
		
		WebElement loginBtn = driver.findElement(By.xpath("//a[@routerlink ='/login']"));
		loginBtn.click();
		
		Thread.sleep(2000);
		driver.navigate().refresh();
		
		WebElement email = driver.findElement(By.xpath("//input[@id='userEmail']"));
		email.sendKeys("ramu@gmail.com");
		
		WebElement password = driver.findElement(By.xpath("//input[@id='userPassword']"));
		password.sendKeys("Ramu@123");
		
		WebElement radioBtn = driver.findElement(By.xpath("//input[@value='admin']"));
		radioBtn.click();
		
		
		WebElement submitBtn = driver.findElement(By.xpath("//button[@type ='submit']"));
		submitBtn.click();
		driver.navigate().refresh();
		Thread.sleep(4000);
		
	}
	
	@Test (priority = 11 , description = " Login page close")
	public void TearDown() {
		driver.close();
	}
}
