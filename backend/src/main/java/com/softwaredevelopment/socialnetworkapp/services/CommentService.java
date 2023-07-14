package com.softwaredevelopment.socialnetworkapp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.softwaredevelopment.socialnetworkapp.model.post.Comment;
import com.softwaredevelopment.socialnetworkapp.repositories.CommentRepository;

@Service
public class CommentService {
    private CommentRepository commentRepository;

    @Autowired
    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    public CommentRepository getCommentRepository() {
        return this.commentRepository;
    }

    public void setCommentRepository(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    public void createComment(Comment comment) {
        this.commentRepository.save(comment);
    }

    public void updateComment(Comment comment) {
        this.commentRepository.save(comment);
    }

    public List<Comment> getAllComments() {
        return this.commentRepository.findAll();
    }

    public List<Comment> getAllCommentsByPostId(Long postId) {
        return this.commentRepository.findByPostId(postId);
    }

    public List<Comment> getAllCommentsByPostIdOrderByCreatedAtDesc(Long postId) {
        return this.commentRepository.findByPostIdOrderByCreatedAtDesc(postId);
    }

    public List<Comment> getAllCommentsByUserId(Long userId) {
        return this.commentRepository.findByUserId(userId);
    }

    public List<Comment> getAllCommentsByUserIdOrderByCreatedAtDesc(Long userId) {
        return this.commentRepository.findByUserIdOrderByCreatedAtDesc(userId);
    }

    public void deleteAllCommentsByPostId(Long postId) {
        this.commentRepository.deleteAllByPostId(postId);
    }

    public void deleteAllCommentsByUserId(Long userId) {
        this.commentRepository.deleteAllByUserId(userId);
    }

    public void deleteComment(Long commentId) {
        this.commentRepository.deleteById(commentId);
    }

    public void deleteAllComments() {
        this.commentRepository.deleteAll();
    }


    

    
}
