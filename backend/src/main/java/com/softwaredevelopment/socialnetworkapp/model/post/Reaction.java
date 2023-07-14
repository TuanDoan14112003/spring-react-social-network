package com.softwaredevelopment.socialnetworkapp.model.post;

import java.time.LocalDate;

import com.softwaredevelopment.socialnetworkapp.model.authentication.User;

import jakarta.persistence.*;

@Entity
@Table(name = "reaction")
public class Reaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @ManyToOne
    @JoinColumn(name="post_id")
    private Post post;

    @ManyToOne
    @JoinColumn(name = "comment_id")
    private Comment comment;

    @ManyToOne
    @JoinColumn(name = "account_id")
    private User author;

    @Enumerated(EnumType.STRING)
    @Column(name = "type")
    private ReactionType type;

    @Column(name = "date")
    private LocalDate date;
    
    
    enum ReactionType {
        LIKE,
        LOVE,
        HAHA,
        WOW,
        SAD,
        ANGRY
    }

    public Reaction() {
    }

    public Reaction(Post post, User author, ReactionType type) {
        this.post = post;
        this.author = author;
        this.type = type;
        this.date = LocalDate.now();
    }

    public long getId() {
        return id;
    }

    public Post getPost() {
        return post;
    }

    public Comment getComment() {
        return comment;
    }

    public User getAuthor() {
        return author;
    }

    public ReactionType getType() {
        return type;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setPost(Post post) {
        this.post = post;
    }

    public void setComment(Comment comment) {
        this.comment = comment;
    }

    public void setAuthor(User author) {
        this.author = author;
    }

    public void setType(ReactionType type) {
        this.type = type;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }    
}
