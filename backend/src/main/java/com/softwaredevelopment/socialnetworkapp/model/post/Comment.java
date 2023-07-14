package com.softwaredevelopment.socialnetworkapp.model.post;

import java.time.LocalDate;
import java.util.List;

import com.softwaredevelopment.socialnetworkapp.model.authentication.User;

import jakarta.persistence.*;

@Entity
@Table(name = "comment")
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @ManyToOne
    @JoinColumn(name="account_id")
    private User author;

    @ManyToOne
    @JoinColumn(name="post_id")
    private Post post;

    @Column(name = "content")
    private String content;

    @Column(name = "date")
    private LocalDate date;

    @Column(name = "likes")
    private int likes;

    public Comment() {

    }

    public Comment(User author, Post post, String content) {
        this.author = author;
        this.post = post;
        this.content = content;
        this.date = LocalDate.now();
        this.likes = 0;
    }

    public Comment(User author, Post post, String content, LocalDate date, int likes) {
        this.author = author;
        this.post = post;
        this.content = content;
        this.date = date;
        this.likes = likes;
    }

    public long getId() {
        return id;
    }

    public User getAuthor() {
        return author;
    }

    public Post getPost() {
        return post;
    }

    public String getContent() {
        return content;
    }

    public LocalDate getDate() {
        return date;
    }

    public int getLikes() {
        return likes;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setAuthor(User author) {
        this.author = author;
    }

    public void setPost(Post post) {
        this.post = post;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public void setLikes(int likes) {
        this.likes = likes;
    }

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", author='" + getAuthor() + "'" +
            ", post='" + getPost() + "'" +
            ", content='" + getContent() + "'" +
            ", date='" + getDate() + "'" +
            ", likes='" + getLikes() + "'" +
            "}";
    }

    

}
