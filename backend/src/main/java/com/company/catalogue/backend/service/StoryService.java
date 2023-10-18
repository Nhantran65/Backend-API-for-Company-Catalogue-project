package com.company.catalogue.backend.service;

import com.company.catalogue.backend.model.Story;
import com.company.catalogue.backend.repository.StoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class StoryService {
	private StoryRepository repo;

	@Autowired
	public StoryService(StoryRepository repo) {
		this.repo = repo;
	}

	public Optional<Story> getStory(int id) {
		return repo.findById(id);
	}

	public List<Story> getAll() {
		return repo.findAll();
	}

	public Story addStory(Story st) {
		st.setPosted(new Date());
		return repo.save(st);
	}


	public void deleteStory(int id) {
		repo.deleteById(id);
	}

	public Story updateStory(Story st, int id) {
		Optional<Story> optionalStory = repo.findById(id);

		if (optionalStory.isPresent()) {
			Story story = optionalStory.get();

			story.setUserId(st.getUserId());
			story.setCompanyId(st.getCompanyId());
			story.setTitle(st.getTitle());
			story.setContent(st.getContent());
			story.setLikes(st.getLikes());
			story.setStatus(st.getStatus());

			return repo.save(story);
		} else {
			return null;
		}
	}


}