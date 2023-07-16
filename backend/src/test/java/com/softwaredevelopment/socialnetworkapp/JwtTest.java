package com.softwaredevelopment.socialnetworkapp;

import com.fasterxml.jackson.databind.MapperFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.softwaredevelopment.socialnetworkapp.model.LogInRequest;
import com.softwaredevelopment.socialnetworkapp.model.SignUpRequest;
import com.softwaredevelopment.socialnetworkapp.model.User;
import com.softwaredevelopment.socialnetworkapp.repositories.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultActions;


import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
public class JwtTest {
    private MockMvc mockMvc;
    private ObjectMapper objectMapper;
    private UserRepository userRepository;

    @Autowired
     public JwtTest(MockMvc mockMvc, ObjectMapper objectMapper, UserRepository userRepository) {
         this.mockMvc = mockMvc;
         this.objectMapper = objectMapper;
         this.userRepository = userRepository;
     }

    @Test
    public void unauthorizedAccessTest() throws Exception {
        this.mockMvc.perform(get("/")).andDo(print())
                .andExpect(status().isUnauthorized());
    }

    @Test
    public void signInFailTest() throws Exception {
        LogInRequest user = new LogInRequest("wronguser@gmail.com","wrongpassword");
        this.mockMvc.perform(post("/auth/signin").contentType(MediaType.APPLICATION_JSON).content(objectMapper.writeValueAsString(user))).andDo(print()).andExpect(status().isUnauthorized()).andExpect(jsonPath("$.message").value("Bad credentials"));
    }

    @Test
    public void signUpSuccessTest() throws Exception {
        SignUpRequest signUpRequest = new SignUpRequest("newuser","newuser@gmail.com","newpassword");
        this.mockMvc.perform(post("/auth/signup").contentType(MediaType.APPLICATION_JSON).content(objectMapper.writeValueAsString(signUpRequest))).andDo(print()).andExpect(status().isOk()).andExpect(jsonPath("$.message").value("User registered successfully!"));
    }


    @Test
    public void signUpAndSignInSuccessTest() throws Exception {
        SignUpRequest signUpRequest = new SignUpRequest("testpassword","testuser@gmail.com","testpassword");
        this.mockMvc.perform(post("/auth/signup").contentType(MediaType.APPLICATION_JSON).content(objectMapper.writeValueAsString(signUpRequest))).andExpect(status().isOk());
        LogInRequest logInRequest = new LogInRequest("testuser@gmail.com","testpassword");
        mockMvc.perform(post("/auth/signin").contentType(MediaType.APPLICATION_JSON).content(objectMapper.writeValueAsString(logInRequest))).andExpect(status().isOk()).andExpect(jsonPath("$.email").value("testuser@gmail.com")).andExpect(cookie().exists("token"));

    }
}
