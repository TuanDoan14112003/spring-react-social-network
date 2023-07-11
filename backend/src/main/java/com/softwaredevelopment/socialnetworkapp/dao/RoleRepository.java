package com.softwaredevelopment.socialnetworkapp.dao;

import com.softwaredevelopment.socialnetworkapp.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role,String> {
    Optional<Role> findByRoleName(String name);
}
