package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.model.Reach;

@Repository
public interface ReachRepo extends JpaRepository<Reach,Integer>{
    
}