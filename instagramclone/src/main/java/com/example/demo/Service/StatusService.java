package com.example.demo.Service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Status;
import com.example.demo.Repository.StatusRepo;

@Service
public class StatusService {
	@Autowired
	StatusRepo statusRepo;
	@Autowired
	UserService userService;
    public Status submitDataIntoDB(Status status) {
    	return statusRepo.save(status);
    }
    public ArrayList<Status>retreiveStatus(){
    	ArrayList<Status> statusList=statusRepo.findAll();
    	for(int i=0;i<statusList.size();i++)
    			{
    		Status statusItem=statusList.get(i);
    		statusItem.setUserName(userService.DisplayUserMetaData(statusItem.getUserId()).getUserName());
    			}
    	
    		return statusList;
    			}
    }

