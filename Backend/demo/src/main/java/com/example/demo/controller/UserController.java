package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.service.UserService;

@CrossOrigin
@RestController
public class UserController {
    @Autowired
    UserService userService;
   @GetMapping("/api/getusers")
   public List<User> getAllUsers()
   {
        return userService.getUsers();
   }
   @GetMapping("/api/getusers/{id}")
   public Optional<User> getUserById(@PathVariable long id)
   {
        return userService.getUserById(id);
   }
   @PostMapping("/api/postusers")
   public User postUser(@RequestBody User user)
   {
     return userService.postUsers(user);
   }

}
