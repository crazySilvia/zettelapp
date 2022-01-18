package de.silvia.backend.services;

import de.silvia.backend.models.User;
import de.silvia.backend.repository.IUserRepo;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserService implements UserDetailsService {

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