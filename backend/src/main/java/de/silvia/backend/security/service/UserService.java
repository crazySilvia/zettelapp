package de.silvia.backend.security.service;

import de.silvia.backend.security.models.User;
import de.silvia.backend.security.repository.IUserRepo;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserService implements UserDetailsService {

    public static final String AUTHORITY_API_READWRITE = "API_READWRITE";
    private final IUserRepo userRepo;

    public UserService(IUserRepo repository) {

        this.userRepo = repository;
    }

    @Override
    public User loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepo.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User " + username + " not found"));
    }
}