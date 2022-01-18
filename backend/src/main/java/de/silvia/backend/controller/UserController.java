package de.silvia.backend.controller;

import de.silvia.backend.models.User;
import de.silvia.backend.services.UserService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@CrossOrigin
@RestController
@RequestMapping("user")
public class UserController {
    private final UserService uServ;

    public UserController(UserService uServ){
        this.uServ = uServ;
    }
    //*********** Methoden *********
    @GetMapping("me")
    public User getLoggedInUser(Principal principal) {
        String username = principal.getName();
        return uServ
                .loadUserByUsername(username);
    }
}
