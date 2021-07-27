package com.example.demo.Controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Comment;
import com.example.demo.Service.CommentsService;

@RestController
@RequestMapping("/comment")
public class CommentController {
	@Autowired
	
	CommentsService commentsService;
      @PostMapping("")
      private Comment submitComment(@RequestBody Comment comment) {
    	  return commentsService.submitCommentsTodb(comment);
      }
      @GetMapping("/{postId}")
    	  private ArrayList<Comment>getCommentForPost(@PathVariable("postId") String postId){
    		  return commentsService.getAllCommentsForDB(postId);
    	  }
    	  
      }

