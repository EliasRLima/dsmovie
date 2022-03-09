package com.devsuperior.dsmovie.ententies;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "tb_movie")
public class Movie {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String title;
	private Integer count;
	private Double score;
	private String image;
	
	@OneToMany(mappedBy = "id.movie") //buscar todos scores relacionados a movie por meio de ScorePK
	private Set<Score> scores = new HashSet<>();	
	
	public Movie() {
		// TODO Auto-generated constructor stub
	}

	public Movie(Long id, String title, Integer count, Double score, String image) {
		super();
		this.id = id;
		this.title = title;
		this.count = count;
		this.score = score;
		this.image = image;
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	
	public Integer getCount() {
		return count;
	}

	public void setCount(Integer count) {
		this.count = count;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Double getScore() {
		return score;
	}

	public void setScore(Double score) {
		this.score = score;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public Set<Score> getScores() {
		return scores;
	}

	public void setScores(Set<Score> scores) {
		this.scores = scores;
	}
	
}
