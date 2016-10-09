package cz.schiman.wish.controllers;

import cz.schiman.wish.controllers.util.SocialControllerUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.social.connect.ConnectionRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.security.Principal;

@Controller
public class AppController {

    @Autowired
    private ConnectionRepository connectionRepository;

    @Autowired
    private SocialControllerUtil util;

    @RequestMapping("/")
    String app(HttpServletRequest request, Principal currentUser, Model model) {
        util.setModel(request, currentUser, model);
        return "app";
    }

}