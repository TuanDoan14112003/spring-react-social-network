package com.softwaredevelopment.socialnetworkapp.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.softwaredevelopment.socialnetworkapp.model.post.Reaction;
import com.softwaredevelopment.socialnetworkapp.services.ReactionService;

@RestController
@RequestMapping("/api/react")
public class ReactRestController {
    private final ReactionService reactionService;

    @Autowired
    public ReactRestController(ReactionService reactionService) {
        this.reactionService = reactionService;
    }

    @GetMapping("/")
    public ResponseEntity<List<Reaction>> getAllReactions() {
        List<Reaction> reactions = this.reactionService.getAllReactions();
        return ResponseEntity.ok(reactions);
    }

    @GetMapping("/{reactionId}")
    public ResponseEntity<Reaction> getReactionById(@PathVariable Long reactionId) {
        Reaction reaction = this.reactionService.getReactionByID(reactionId);
        return ResponseEntity.ok(reaction);
    }

    @GetMapping("/post/{postId}")
    public ResponseEntity<List<Reaction>> getAllReactionsByPostId(@PathVariable Long postId) {
        List<Reaction> reactions = this.reactionService.getAllReactionsByPostId(postId);
        return ResponseEntity.ok(reactions);
    }

    @GetMapping("/post/{postId}/desc")
    public ResponseEntity<List<Reaction>> getAllReactionsByPostIdOrderByCreatedAtDesc(@PathVariable Long postId) {
        List<Reaction> reactions = this.reactionService.getAllReactionsByPostIdOrderByCreatedAtDesc(postId);
        return ResponseEntity.ok(reactions);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Reaction>> getAllReactionsByUserId(@PathVariable Long userId) {
        List<Reaction> reactions = this.reactionService.getAllReactionsByUserId(userId);
        return ResponseEntity.ok(reactions);
    }

    @GetMapping("/user/{userId}/desc")
    public ResponseEntity<List<Reaction>> getAllReactionsByUserIdOrderByCreatedAtDesc(@PathVariable Long userId) {
        List<Reaction> reactions = this.reactionService.getAllReactionsByUserIdOrderByCreatedAtDesc(userId);
        return ResponseEntity.ok(reactions);
    }

    @DeleteMapping("/post/{postId}")
    public ResponseEntity<String> deleteAllReactionsByPostId(@PathVariable Long postId) {
        this.reactionService.deleteAllReactionsByPostId(postId);
        return ResponseEntity.ok("All reactions by post with id " + postId + " have been deleted");
    }

    @DeleteMapping("/user/{userId}")
    public ResponseEntity<String> deleteAllReactionsByUserId(@PathVariable Long userId) {
        this.reactionService.deleteAllReactionsByUserId(userId);
        return ResponseEntity.ok("All reactions by user with id " + userId + " have been deleted");
    }

    @DeleteMapping("/{reactionId}")
    public ResponseEntity<String> deleteReactionById(@PathVariable Long reactionId) {
        Reaction reaction = this.reactionService.getReactionByID(reactionId);
        this.reactionService.deleteReaction(reaction);
        return ResponseEntity.ok("Reaction with id " + reactionId + " has been deleted");
    }

    @DeleteMapping("/")
    public ResponseEntity<String> deleteAllReactions() {
        this.reactionService.getReactionRepository().deleteAll();
        return ResponseEntity.ok("All reactions have been deleted");
    }

    @PostMapping("/")
    public ResponseEntity<String> createReaction(@RequestBody Reaction reaction) {
        this.reactionService.createReaction(reaction);
        return ResponseEntity.ok("Reaction has been created");
    }








    
}
