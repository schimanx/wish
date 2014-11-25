package cz.schiman.wish.web;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AppController {

    @RequestMapping("/test/")
    String app() {
        return "app";
    }

}