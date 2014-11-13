package cz.schiman.wish.controllers

import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;

@RestController
public class Test {

    @RequestMapping("/")
    String home() {
        return "Hello World!";
    }

}