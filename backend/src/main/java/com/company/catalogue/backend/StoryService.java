import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class StoryService {
    //@Autowired
    private storyRepo repo; //change repository here

    public StoryService() {

    }
    public Optional<story> getStory(int id) {
        Optional opt = Optional.empty();
         for(story st: repo.findAll())
        if (id == st.getId()) {
            opt = Optional.of(st);
            return opt;
        }
         return opt;
    }

    public void addStory(story st){
        this.repo.save(st);
    }

    //add data
    public void deleteStory(int id) {
        repo.deleteById(id);
    }

    public story updateStory(int id){
        return repo.findById(id)
                .map(story -> {
                    story.setContent("The world rests on your shoulder");
                    story.setPosted(new Date());
                    return repo.save(story);
                })
                .orElseGet(() -> {
                    return null;
                });
    }



}