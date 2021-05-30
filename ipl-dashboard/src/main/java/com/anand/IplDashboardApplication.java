package com.anand;

import org.springframework.batch.core.configuration.annotation.EnableBatchProcessing;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/")
@SpringBootApplication
@EnableBatchProcessing
public class IplDashboardApplication {

	@RequestMapping("/")
	public String sayHello() {
		return "Hello, World";
	}
	public static void main(String[] args) {
		SpringApplication.run(IplDashboardApplication.class, args);
	}

}
