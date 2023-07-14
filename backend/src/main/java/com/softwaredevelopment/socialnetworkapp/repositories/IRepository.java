package com.softwaredevelopment.socialnetworkapp.repositories;

import java.util.List;
import java.util.Optional;

import javax.swing.text.html.Option;

public interface IRepository<T> {
    Optional<T> findById(Long id);
    Optional<List<T>> findAll();
    void save(T entity);
    void deleteById(Long id);
    void delete(T entity);    
}
