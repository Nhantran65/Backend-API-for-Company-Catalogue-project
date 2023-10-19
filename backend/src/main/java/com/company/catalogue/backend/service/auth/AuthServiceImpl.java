package com.company.catalogue.backend.service.auth;

import com.company.catalogue.backend.dto.SigninDTO;
import com.company.catalogue.backend.dto.SignupDTO;
import com.company.catalogue.backend.dto.UserDTO;
import com.company.catalogue.backend.model.User;
import com.company.catalogue.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;



@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDTO createUser(SignupDTO signupDTO) {
        String email = signupDTO.getEmail();
        User existingUser = userRepository.findFirstByEmail(email);

        if (existingUser != null) {
            throw new EmailAlreadyExistsException("Email already exists in our system!");
        }

        User user = new User();
        user.setFirstname(signupDTO.getFirstname());
        user.setLastname(signupDTO.getLastname());
        user.setRole(signupDTO.getRole());
        user.setEmail(email);
        user.setPasswordHash(new BCryptPasswordEncoder().encode(signupDTO.getPassword()));
        User createdUser = userRepository.save(user);

        UserDTO userDTO = new UserDTO();
        userDTO.setId(createdUser.getId());
        userDTO.setEmail(createdUser.getEmail());
        userDTO.setFirstname(createdUser.getFirstname());
        userDTO.setLastname(createdUser.getLastname());
        userDTO.setRole(createdUser.getRole());

        return userDTO;
    }

    @Override
    public UserDTO signin(SigninDTO signinDTO) {
        String email = signinDTO.getEmail();
        String password = signinDTO.getPassword();

        User existingUser = userRepository.findFirstByEmail(email);

        try {
            if (existingUser == null) {
                throw new EmailAlreadyExistsException("User not found");
            }

            if (!new BCryptPasswordEncoder().matches(password, existingUser.getPasswordHash())) {
                throw new EmailAlreadyExistsException("Invalid Password");
            }
        }
        catch (EmailAlreadyExistsException existsException){
            throw new EmailAlreadyExistsException("Email already exists in our system!");
        }

        // Authentication is successful, create and return a UserDTO.
        UserDTO userDTO = new UserDTO();
        userDTO.setId(existingUser.getId());
        userDTO.setEmail(existingUser.getEmail());
        userDTO.setFirstname(existingUser.getFirstname());
        userDTO.setLastname(existingUser.getLastname());
        userDTO.setRole(existingUser.getRole());

        return userDTO;
    }
}