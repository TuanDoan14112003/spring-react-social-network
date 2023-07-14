package com.softwaredevelopment.socialnetworkapp.services;

import org.springframework.stereotype.Service;

import com.softwaredevelopment.socialnetworkapp.model.post.Post;
import com.softwaredevelopment.socialnetworkapp.repositories.PostRepository;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

@Service
public class PostService {
    private PostRepository postRepository;

    @Autowired
    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    public PostRepository getPostRepository() {
        return this.postRepository;
    }

    public void setPostRepository(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    public void createPost(Post post) {
        this.postRepository.save(post);
    }

    public void updatePost(Post post) {
        this.postRepository.save(post);
    }

    public Post getPostByID(Long postId) {
        return this.postRepository.findById(postId).orElse(null);
    }

    public List<Post> getAllPosts() {
        return this.postRepository.findAll();
    }
    
    public List<Post> getAllPostsByUserId(Long userId) {
        return this.postRepository.findByUserId(userId);
    }

    public List<Post> getAllPostsByUserIdOrderByCreatedAtDesc(Long userId) {
        return this.postRepository.findByUserIdOrderByCreatedAtDesc(userId);
    }

    public List<Post> getAllPostsByCreatedDateBetween(Date startDate, Date endDate) {
        return this.postRepository.findByCreatedAtBetween(startDate, endDate);
    }

    public List<Post> getAllPostsByTitleContaining(String title) {
        return this.postRepository.findByTitleContaining(title);
    }

    public void deletePost(Long postId) {
        this.postRepository.deleteById(postId);
    }

    public void deleteAllPosts() {
        this.postRepository.deleteAll();
    }

   
    public void deleteAllPostsByUserId(Long userId) {
        this.postRepository.deleteAllByUserId(userId);
    }


}
