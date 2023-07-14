package com.softwaredevelopment.socialnetworkapp.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.softwaredevelopment.socialnetworkapp.model.post.Reaction;
import com.softwaredevelopment.socialnetworkapp.repositories.ReactionRepository;

@Service
public class ReactionService {
    private ReactionRepository reactionRepository;

    @Autowired
    public ReactionService(ReactionRepository reactionRepository) {
        this.reactionRepository = reactionRepository;
    }

    public ReactionRepository getReactionRepository() {
        return this.reactionRepository;
    }

    public void setReactionRepository(ReactionRepository reactionRepository) {
        this.reactionRepository = reactionRepository;
    }

    public void createReaction(Reaction reaction) {
        this.reactionRepository.save(reaction);
    }

    public void updateReaction(Reaction reaction) {
        this.reactionRepository.save(reaction);
    }

    public void deleteReaction(Reaction reaction) {
        this.reactionRepository.delete(reaction);
    }

    public void deleteAllReactionsByPostId(Long postId) {
        this.reactionRepository.deleteAllByPostId(postId);
    }

    public void deleteAllReactionsByUserId(Long userId) {
        this.reactionRepository.deleteAllByUserId(userId);
    }

    public Reaction getReactionByID(long reactionId) {
        return this.reactionRepository.findById(reactionId).orElse(null);
    }

    public List<Reaction> getAllReactions() {
        return this.reactionRepository.findAll();
    }

    public List<Reaction> getAllReactionsByPostId(Long postId) {
        return this.reactionRepository.findByPostId(postId);
    }

    public List<Reaction> getAllReactionsByPostIdOrderByCreatedAtDesc(Long postId) {
        return this.reactionRepository.findByPostIdOrderByCreatedAtDesc(postId);
    }

    public List<Reaction> getAllReactionsByUserId(Long userId) {
        return this.reactionRepository.findByUserId(userId);
    }

    public List<Reaction> getAllReactionsByUserIdOrderByCreatedAtDesc(Long userId) {
        return this.reactionRepository.findByUserIdOrderByCreatedAtDesc(userId);
    }

    
}
