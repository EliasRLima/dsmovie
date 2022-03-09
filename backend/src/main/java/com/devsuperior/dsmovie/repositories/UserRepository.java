package com.devsuperior.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmovie.ententies.User;

public interface UserRepository extends JpaRepository<User, Long>{
	
	public User findByEmail(String email);
}
