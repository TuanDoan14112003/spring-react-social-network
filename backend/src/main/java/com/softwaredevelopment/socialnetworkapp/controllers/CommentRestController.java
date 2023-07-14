package com.softwaredevelopment.socialnetworkapp.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.softwaredevelopment.socialnetworkapp.model.post.Comment;
import com.softwaredevelopment.socialnetworkapp.services.CommentService;

@RestController
@RequestMapping("/api/comment")
public class CommentRestController {
    private final CommentService commentService;

    @Autowired
    public CommentRestController(CommentService commentService) {
        this.commentService = commentService;
    }

    @GetMapping("/")
    public ResponseEntity<List<Comment>> getAllComments() {
        List<Comment> comments = this.commentService.getAllComments();
        return ResponseEntity.ok(comments);
    }

    @GetMapping("/post/{postId}")
    public ResponseEntity<List<Comment>> getAllCommentsByPostId(@PathVariable Long postId) {
        List<Comment> comments = this.commentService.getAllCommentsByPostId(postId);
        return ResponseEntity.ok(comments);
    }

    @GetMapping("/post/{postId}/desc")
    public ResponseEntity<List<Comment>> getAllCommentsByPostIdOrderByCreatedAtDesc(@PathVariable Long postId) {
        List<Comment> comments = this.commentService.getAllCommentsByPostIdOrderByCreatedAtDesc(postId);
        return ResponseEntity.ok(comments);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Comment>> getAllCommentsByUserId(@PathVariable Long userId) {
        List<Comment> comments = this.commentService.getAllCommentsByUserId(userId);
        return ResponseEntity.ok(comments);
    }

    @GetMapping("/user/{userId}/desc")
    public ResponseEntity<List<Comment>> getAllCommentsByUserIdOrderByCreatedAtDesc(@PathVariable Long userId) {
        List<Comment> comments = this.commentService.getAllCommentsByUserIdOrderByCreatedAtDesc(userId);
        return ResponseEntity.ok(comments);
    }

    @DeleteMapping("/post/{postId}")
    public ResponseEntity<String> deleteAllCommentsByPostId(@PathVariable Long postId) {
        this.commentService.deleteAllCommentsByPostId(postId);
        return ResponseEntity.ok("All comments by post with id " + postId + " have been deleted");
    }

    @DeleteMapping("/user/{userId}")
    public ResponseEntity<String> deleteAllCommentsByUserId(@PathVariable Long userId) {
        this.commentService.deleteAllCommentsByUserId(userId);
        return ResponseEntity.ok("All comments by user with id " + userId + " have been deleted");
    }

    @DeleteMapping("/")
    public ResponseEntity<String> deleteAllComments() {
        this.commentService.getCommentRepository().deleteAll();
        return ResponseEntity.ok("All comments have been deleted");
    }

    @DeleteMapping("/{commentId}")
    public ResponseEntity<String> deleteCommentById(@PathVariable Long commentId) {
        this.commentService.getCommentRepository().deleteById(commentId);
        return ResponseEntity.ok("Comment with id " + commentId + " has been deleted");
    }

    @PostMapping("/")
    public ResponseEntity<String> createComment(@RequestBody Comment comment) {
        this.commentService.createComment(comment);
        return ResponseEntity.ok("Comment has been created");
    }


}
