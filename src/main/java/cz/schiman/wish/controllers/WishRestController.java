package cz.schiman.wish.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.social.connect.ConnectionRepository;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.security.Principal;

@RestController
public class WishRestController {

  private final ConnectionRepository connectionRepository;

  @Autowired
  public WishRestController(ConnectionRepository connectionRepository) {
    this.connectionRepository = connectionRepository;
  }

  @GetMapping("/rest/api/")
  public String test(HttpServletRequest request, Principal currentUser, Model model) {
    return "test";
  }

}
