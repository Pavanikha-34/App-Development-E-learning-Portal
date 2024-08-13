package com.example.backend.controller;

import org.springframework.web.bind.annotation.RestController;
import com.example.backend.model.Reach;
import com.example.backend.service.ReachService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("contact")
public class ReachController {
    @Autowired
    ReachService rs;



  
    @PostMapping("/add")
    public ResponseEntity<Reach> adddata(@RequestBody Reach r) {
        Reach obj = rs.create(r);
        return new ResponseEntity<>(obj, HttpStatus.CREATED);
    }

    @GetMapping("/api/getit")
    public List<Reach> fetchDepartmentList() {
        return rs.fetchDepartmentList();
    }

    @GetMapping("/api/reach/{userId}")
    public ResponseEntity<Reach> getById(@PathVariable("userId") int userId) {
        Reach reach = rs.getByid(userId);
        if (reach != null) {
            return new ResponseEntity<>(reach, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/api/reach/{userId}")
    public ResponseEntity<Reach> putMethod(@PathVariable("userId") int userId, @RequestBody Reach pd) {
        if (rs.updateDetails(userId, pd)) {
            return new ResponseEntity<>(pd, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/api/reach/{userId}")
    public ResponseEntity<Boolean> delete(@PathVariable("userId") int userId) {
        if (rs.deleteEmployee(userId)) {
            return new ResponseEntity<>(true, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(false, HttpStatus.NOT_FOUND);
        }
    }
}
