package com.example.demo.Controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Post;
import com.example.demo.Service.PostService;

@RestController
@RequestMapping("/post")
public class PostController {
	@Autowired
	PostService postService;
      @PostMapping("")
      private Post SubmitUserPost(@RequestBody Post post) {
    	  return postService.submitPostToDataBase(post);
      }
      @GetMapping("")
      private ArrayList<Post> getAllPost(){
    	  return postService.retrivePostFromDB();
      }
}
