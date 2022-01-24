package de.silvia.backend.security.controller;

import de.silvia.backend.security.models.User;
import de.silvia.backend.security.service.UserService;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("api/user")
public class UserController {
    private final UserService uServ;

    public UserController(UserService uServ){
        this.uServ = uServ;
    }

    //*********** Methoden *********
    /*@GetMapping("user")
    public List<String> getUsername() {
        return uServ.getAll();
    }*/

    public UserDetails  logIn(String username, String password){

        User userExist = uServ.loadUserByUsername(username);
        if(userExist.getUsername().equals(username)){
            //uServ.logInUser(username, password);
            return userExist;
        }else{
            return null;
        }
    }

    @GetMapping("me")
    public UserDetails getLoggedInUser(Principal principal) {
        String username = principal.getName();
        return uServ
                .loadUserByUsername(username);
    }
}
