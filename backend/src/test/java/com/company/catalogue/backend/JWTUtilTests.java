package com.company.catalogue.backend;

import com.company.catalogue.backend.service.jwt.UserDetailsServiceImpl;
import com.company.catalogue.backend.util.JwtUtil;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.MalformedJwtException;
import java.util.Collection;
import java.util.Date;
import java.util.function.Function;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import static org.mockito.Mockito.when;

public class JWTUtilTests {

	@Test
	void jwtIsGenerated() {
		JwtUtil jwtUtil = new JwtUtil();

		String token = jwtUtil.generateToken("inatsuz");

		Assertions.assertEquals(133, token.length());
		Assertions.assertEquals("eyJhbGciOiJIUzI1NiJ9.", token.substring(0, 21));
	}

	@Test
	void extractsUsername() {
		JwtUtil jwtUtil = new JwtUtil();

		String token = jwtUtil.generateToken("inatsuz");
		String username = jwtUtil.extractUsername(token);

		Assertions.assertEquals("inatsuz", username);
	}

	@Test
	void extractsExpiration() {
		JwtUtil jwtUtil = new JwtUtil();

		String token = jwtUtil.generateToken("inatsuz");
		Date expiration = jwtUtil.extractExpiration(token);

		Assertions.assertInstanceOf(Date.class, expiration);
		Assertions.assertTrue(expiration.getTime() > new Date().getTime());
	}

	@Test
	void extractsClaim() {
		JwtUtil jwtUtil = new JwtUtil();

		Function<Claims, String> subjectResFunction = claims -> {
			return claims.get("sub").toString();
		};

		String token = jwtUtil.generateToken("inatsuz");
		String subject = jwtUtil.extractClaim(token, subjectResFunction);
		System.out.println(subject);
	}

	@Test
	void validatesValidToken() {
		JwtUtil jwtUtil = new JwtUtil();

		String token = jwtUtil.generateToken("inatsuz");

		UserDetails userDetailsMock = Mockito.mock(UserDetails.class);
		when(userDetailsMock.getUsername()).thenReturn("inatsuz");

		Assertions.assertTrue(jwtUtil.validateToken(token, userDetailsMock));
	}

	@Test
	void throwsMalformedJWTException() {
		JwtUtil jwtUtil = new JwtUtil();

		UserDetails userDetailsMock = Mockito.mock(UserDetails.class);
		when(userDetailsMock.getUsername()).thenReturn("inatsuz");

		Assertions.assertThrows(MalformedJwtException.class, () -> jwtUtil.validateToken("thisisnotavalidtoken", userDetailsMock));
	}

	@Test
	void throwsErrorExpiredTokenException() {
		JwtUtil jwtUtil = new JwtUtil();

		String oldToken = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2YXNjb3JhbWluaG9zQGhvdG1haWwuY29tIiwiaWF0IjoxNjk4NDA1Mjk2LCJleHAiOjE2OTg0MDcwOTZ9.v2aI3pXdhUVWCwQUDxUfPrANfBvoAeEqwfYdW0SXFSc";

		UserDetails userDetailsMock = Mockito.mock(UserDetails.class);
		when(userDetailsMock.getUsername()).thenReturn("inatsuz");

		Assertions.assertThrows(ExpiredJwtException.class, () -> jwtUtil.validateToken(oldToken, userDetailsMock));
	}

	@Test
	void returnsFalseWhenNonMatchingUsernameInToken() {
		JwtUtil jwtUtil = new JwtUtil();

		String token = jwtUtil.generateToken("inatsuz");

		UserDetails userDetailsMock = Mockito.mock(UserDetails.class);
		when(userDetailsMock.getUsername()).thenReturn("vasco");

		Assertions.assertFalse(jwtUtil.validateToken(token, userDetailsMock));
	}
}