package com.softwaredevelopment.socialnetworkapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.softwaredevelopment.socialnetworkapp.model.authentication.Role;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role,String> {
    Optional<Role> findByRoleName(String name);
}
