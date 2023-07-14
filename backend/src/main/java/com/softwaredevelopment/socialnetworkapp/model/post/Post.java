package com.softwaredevelopment.socialnetworkapp.model.post;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.softwaredevelopment.socialnetworkapp.model.authentication.User;

import jakarta.persistence.*;

@Entity
@Table(name = "post")
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @ManyToOne
    @JoinColumn(name = "account_id")
    private User author;

    @Column(name = "content")
    private String content;

    @Column(name = "medias")
    private List<String> medias;

    @Column(name = "date")
    private LocalDate date;

    @Column(name = "likes")
    private int likes;

    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Reaction> reactions = new ArrayList<>();

    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Comment> comments = new ArrayList<>();

    public Post() {
    }

    public Post(User author, String content, List<String> medias) {
        this.author = author;
        this.content = content;
        this.medias = medias;
        this.date = LocalDate.now();
        this.likes = 0;
    }

    public Post(User author, String content, List<String> medias, LocalDate date, int likes) {
        this.author = author;
        this.content = content;
        this.medias = medias;
        this.date = date;
        this.likes = likes;
    }

    public long getId() {
        return id;
    }

    public User getAuthor() {
        return author;
    }

    public String getContent() {
        return content;
    }

    public List<String> getMedias() {
        return medias;
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

    public void setContent(String content) {
        this.content = content;
    }

    public void setMedias(List<String> medias) {
        this.medias = medias;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public void setLikes(int likes) {
        this.likes = likes;
    }

    @Override
    public String toString() {
        String post = "Post{" +
                "id=" + id +
                ", author=" + author +
                ", content='" + content + '\'' +
                ", medias=" + medias +
                ", date=" + date +
                ", likes=" + likes +
                '}';
        return post;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof Post post))
            return false;
        return id == post.id && likes == post.likes && author.equals(post.author) && content.equals(post.content)
                && medias.equals(post.medias) && date.equals(post.date);
    }

}
