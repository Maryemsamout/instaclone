package com.example.demo.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.Entity.Users;
import com.example.demo.Repository.UserRepo;

@Service
public class UserService {
	@Autowired
	UserRepo userRepo;
     public Users submitMetaDataOfUser(Users user) {
    	  return userRepo.save(user);
      }
      public Users DisplayUserMetaData(String userid) {
    	  return userRepo.findByUserId(userid);
}
		
	}
	
