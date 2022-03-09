package com.devsuperior.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmovie.ententies.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long>{

}
