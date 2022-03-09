package com.devsuperior.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmovie.ententies.Score;
import com.devsuperior.dsmovie.ententies.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK>{

}
