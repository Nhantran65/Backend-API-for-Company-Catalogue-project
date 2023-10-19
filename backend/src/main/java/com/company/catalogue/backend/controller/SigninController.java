package com.company.catalogue.backend.controller;



import com.company.catalogue.backend.dto.AuthenticationDTO;
import com.company.catalogue.backend.dto.AuthenticationResponse;
import com.company.catalogue.backend.service.jwt.UserDetailsServiceImpl;
import com.company.catalogue.backend.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SigninController {

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @PostMapping("/sign-in")
    public AuthenticationResponse signin(@RequestBody AuthenticationDTO authenticationDTO) {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationDTO.getEmail(), authenticationDTO.getPassword()));
        } catch (BadCredentialsException e) {
            throw new BadCredentialsException("Incorrect username or password!");
        }

        // Instead of passing userDetails, pass the email (or username)
        final String jwt = jwtUtil.generateToken(authenticationDTO.getEmail());

        return new AuthenticationResponse(jwt);
    }
}

