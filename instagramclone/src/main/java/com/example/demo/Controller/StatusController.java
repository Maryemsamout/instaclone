package com.example.demo.Controller;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Status;
import com.example.demo.Service.StatusService;

@RestController
@RequestMapping("/status")
public class StatusController {
	
	@Autowired
	StatusService statusService;
	@PostMapping("/test")
 private Status submitStatus(@RequestBody Status status) {
		System.out.println("message");
	 return statusService.submitDataIntoDB(status);
 }
 @GetMapping("")   
 private ArrayList<Status> getAllStatus(){
	 return statusService.retreiveStatus();
 }
}
