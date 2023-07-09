package com.softwaredevelopment.socialnetworkapp.rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldRestController {
    @GetMapping("/")
    public String sayHelloWorld() {
        return "Hello World";
    }
}
