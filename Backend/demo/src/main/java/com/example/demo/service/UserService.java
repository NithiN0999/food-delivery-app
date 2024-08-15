package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepo;
@Service
public class UserService {
     @Autowired
    UserRepo userRepo;

    

   
    public List<User> getUsers()
    {
        return userRepo.findAll();
    }
    public Optional<User> getUserById(long id)
    {
        return userRepo.findById(id);
    }
    public User postUsers(User user)
    {
        return userRepo.save(user);
    }

}
