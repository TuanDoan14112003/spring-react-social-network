package com.softwaredevelopment.socialnetworkapp.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.softwaredevelopment.socialnetworkapp.model.post.Reaction;

@Repository
public interface ReactionRepository extends JpaRepository<Reaction, Long>{
    List<Reaction> findByPostId(Long postId);
    List<Reaction> findByPostIdOrderByCreatedAtDesc(Long postId);
    List<Reaction> findByUserId(Long userId);
    List<Reaction> findByUserIdOrderByCreatedAtDesc(Long userId);
    void deleteAllByPostId(Long postId);
    void deleteAllByUserId(Long userId);
}
