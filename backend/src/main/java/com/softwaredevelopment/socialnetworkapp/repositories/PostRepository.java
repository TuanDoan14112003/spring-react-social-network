package com.softwaredevelopment.socialnetworkapp.repositories;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.softwaredevelopment.socialnetworkapp.model.post.Post;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
    List<Post> findByUserId(Long userId);
    List<Post> findByUserIdOrderByCreatedAtDesc(Long userId);
    List<Post> findByCreatedAtBetween(Date startDate, Date endDate);
    List<Post> findByTitleContaining(String title);
    void deleteAllByUserId(Long userId);

}
