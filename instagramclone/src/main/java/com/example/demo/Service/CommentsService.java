package com.example.demo.Service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Comment;
import com.example.demo.Repository.CommentRepo;

@Service
public class CommentsService {

	@Autowired 
	CommentRepo commentRepo;
	@Autowired
	UserService userService;
	
    public Comment submitCommentsTodb(Comment comment) {
    	return commentRepo.save(comment);
    }
    public ArrayList<Comment>getAllCommentsForDB(String postId){
    	ArrayList<Comment> commentList=commentRepo.findAllByPostId(postId);
    	for(int i=0;i<commentList.size();i++)
    			{
    		Comment commentItem=commentList.get(i);
    		commentItem.setUserName(userService.DisplayUserMetaData(commentItem.getUserId()).getUserName());
    			}
    	
    		return commentList;
    			}
}
