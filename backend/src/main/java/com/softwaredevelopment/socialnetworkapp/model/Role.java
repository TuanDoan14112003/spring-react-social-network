package com.softwaredevelopment.socialnetworkapp.model;

import jakarta.persistence.*;

@Entity
@Table(name="role")
public class Role {
    @Id
    @Column(name = "role_name")
    private String roleName;


    public Role() {

    }

    public Role(String roleName) {
        this.roleName = roleName;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }


}
