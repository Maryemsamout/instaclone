package com.example.demo.Controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Users;
import com.example.demo.Service.UserService;
@RestController
@RequestMapping("/users")
public class UserController {
	@Autowired
	UserService userService;
	@PostMapping("")
   private Users UserController(@RequestBody Users users) {
		return userService.submitMetaDataOfUser(users);
		
        
   }
	@GetMapping("/{userid}")
	private Users getUserDetails(@PathVariable("userid")String userId) {
		 return userService.DisplayUserMetaData(userId);
		
	}
   
   
}
