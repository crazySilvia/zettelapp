package de.silvia.backend.security.service;

import de.silvia.backend.BackendApplication;
import de.silvia.backend.security.models.LoginData;
import de.silvia.backend.security.models.User;
import de.silvia.backend.security.repository.IUserRepo;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService implements UserDetailsService {

    //public static final String AUTHORITY_API_READWRITE = "API_READWRITE";
    private final IUserRepo userRepo;

    public UserService(IUserRepo repository) {

        this.userRepo = repository;
    }

    @Override
    public User loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepo.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User " + username + " not found"));
    }

   /* PasswordEncoder encoder;
    public Optional<User> logInUser(String username, String password){
        final String encodedPassword = encoder.encode(password);
        return userRepo.auth(username, encodedPassword);
        //token erstellen und zurückgeben
    }*/

    private static final Log LOG = LogFactory.getLog(BackendApplication.class);

    public  LoginData registerUser(LoginData data){
        try {
            userRepo.insert(data);
        } catch (Exception e){
            LOG.info("User " + data.getName() + " already exists.");
        }
        return null; //todo
    }

    /*public List<String> getAll() {
        return userRepo.getAll();
    }*/
}