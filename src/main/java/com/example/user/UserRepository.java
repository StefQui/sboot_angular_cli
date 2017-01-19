package com.example.user;

import com.example.support.jpa.CustomJpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends CustomJpaRepository<User, Integer> {

	Optional<User> findByUsername(String username);

}
