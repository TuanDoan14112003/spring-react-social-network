package com.softwaredevelopment.socialnetworkapp.repositories;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.softwaredevelopment.socialnetworkapp.model.post.Comment;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long>{
    List<Comment> findByPostId(Long postId);
    List<Comment> findByPostIdOrderByCreatedAtDesc(Long postId);
    List<Comment> findByUserId(Long userId);
    List<Comment> findByUserIdOrderByCreatedAtDesc(Long userId);
    void deleteAllByPostId(Long postId);
    void deleteAllByUserId(Long userId);
}
