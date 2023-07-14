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
import com.softwaredevelopment.socialnetworkapp.model.post.Post;
import com.softwaredevelopment.socialnetworkapp.services.PostService;

@RestController
@RequestMapping("/posts")
public class PostRestController {
    private final PostService postService;

    @Autowired
    public PostRestController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping("/")
    public ResponseEntity<List<Post>> getAllPosts() {
        List<Post> posts = this.postService.getAllPosts();
        return ResponseEntity.ok(posts);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Post>> getAllPostsByUserId(@PathVariable Long userId) {
        List<Post> posts = this.postService.getAllPostsByUserId(userId);
        return ResponseEntity.ok(posts);
    }

    @GetMapping("/user/{userId}/desc")
    public ResponseEntity<List<Post>> getAllPostsByUserIdOrderByCreatedAtDesc(Long userId) {
        List<Post> posts = this.postService.getAllPostsByUserIdOrderByCreatedAtDesc(userId);
        return ResponseEntity.ok(posts);
    }

    @GetMapping("/{postId}")
    public ResponseEntity<Post> getPostById(@PathVariable Long postId) {
        Post post = this.postService.getPostByID(postId);
        return ResponseEntity.ok(post);
    }

    @GetMapping("/title/{title}")
    public ResponseEntity<List<Post>> getAllPostsByTitleContaining(@PathVariable String title) {
        List<Post> posts = this.postService.getAllPostsByTitleContaining(title);
        return ResponseEntity.ok(posts);
    }

    @DeleteMapping("/user/{userId}")
    public ResponseEntity<String> deleteAllPostsByUserId(@PathVariable Long userId) {
        this.postService.deleteAllPostsByUserId(userId);
        return ResponseEntity.ok("All posts by user with id " + userId + " have been deleted");
    }

    @DeleteMapping("/")
    public ResponseEntity<String> deleteAllPosts() {
        this.postService.deleteAllPosts();
        return ResponseEntity.ok("All posts have been deleted");
    }

    @PostMapping("/")
    public ResponseEntity<String> createPost(@RequestBody Post post) {
        this.postService.createPost(post);
        return ResponseEntity.ok("Post created");
    }

    // @UpdateMapping("/update")
    // public ResponseEntity<String> updatePost(@RequestBody Post post) {
    //     this.postService.updatePost(post);
    //     return ResponseEntity.ok("Post updated");
    // }


}
