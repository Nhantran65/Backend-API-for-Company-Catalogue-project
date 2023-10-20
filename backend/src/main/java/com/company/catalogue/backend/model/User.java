package com.company.catalogue.backend.model;

import com.company.catalogue.backend.enums.Role;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "user")
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "first_name")
    private String firstname;
    @Column(name = "last_name")
    private String lastname ;
    @Column
    private String email;
    @Column(name = "password_hash")
    private String passwordHash;
    @Column(name = "profile_picture")
    private String profilePicture;
    @Column
    private String bio;

    @Enumerated(EnumType.STRING)
    private Role role ;

}
