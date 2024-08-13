package com.example.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Sort;

import com.example.backend.model.Reach;
import com.example.backend.repository.ReachRepo;

@Service
public class ReachService {
    @Autowired
    ReachRepo rr;
     public Reach create(Reach r)
    {
       
        return rr.save(r);
    } 
    public List<Reach> fetchDepartmentList() 
    { 
        return (List<Reach>) rr.findAll(); 
    } 
    public Reach getByid(int userId)
    {
        return rr.findById(userId).orElse(null);
    }
    public List<Reach> getbysort(String field)
    {
        return rr.findAll(Sort.by(Sort.Direction.ASC,field));
    }
    public boolean updateDetails(int userId,Reach r)
    {
        if(rr.findById(userId)==null)
        {
            return false;
        }
        try{
            rr.save(r);
        }
        catch(Exception e)
        {
            return false;
        }
        return true;
    }
    public boolean deleteEmployee(int userId)
    {
        if(this.getByid(userId) == null)
        {
            return false;
        }
        rr.deleteById(userId);
        return true;
        }
    
}