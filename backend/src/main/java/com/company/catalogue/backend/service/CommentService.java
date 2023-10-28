package com.company.catalogue.backend.service;

import com.company.catalogue.backend.model.Comment;
import com.company.catalogue.backend.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class CommentService {
    private CommentRepository commentRepository;

    @Autowired
    CommentService(CommentRepository commentRepository){ this.commentRepository = commentRepository;};

    public Optional<Comment> getCommentsForStory( int id) {
        return commentRepository.findById(id);
    }

    public List<Comment> getAll() {
        return commentRepository.findAll();
    }

    public Comment addComment(Comment comment){
        return commentRepository.save(comment);
    }

    public void deleteComment(int id){
         commentRepository.deleteById(id);
    }

    public Comment updateComment(Comment newComment, int id) {
        Optional<Comment> optionalComment = commentRepository.findById(id);

        if (optionalComment.isPresent()) {
            Comment comment = optionalComment.get();

            // Update the fields that should be updated
            comment.setContent(newComment.getContent());
            comment.setUser(newComment.getUser());
            comment.setDatePosted(newComment.getDatePosted());
            comment.setStory(newComment.getStory());
            // Save new comment to database
            return commentRepository.save(comment);
        } else {
            return null;
        }
    }



    }




