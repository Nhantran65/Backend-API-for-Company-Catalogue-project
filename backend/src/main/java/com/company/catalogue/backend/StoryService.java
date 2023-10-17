import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class StoryService {
    //@Autowired
    private StoryRepo repo; //change repository here

    public StoryService() {

    }
    public Optional<Story> getStory(int id) {
        Optional opt = Optional.empty();
         for(story st: repo.findAll())
        if (id == st.getId()) {
            opt = Optional.of(st);
            return opt;
        }
         return opt;
    }
    public List<Story> getAllStory() {
        return repo.findAll();
    }

    public Story addStory(Story st){
        int max = 100000;
        int min = 500;
        int likes = (int) ((Math.random() * (max - min)) + min);
        st.setPosted(new Date());
        st.setLikes(likes);
        st.setStatus();
        return repo.save(st);
    }

    
    public void deleteStory(int id) {
        repo.deleteById(id);
    }

    public Story updateStory(Story st, int id){
        int max = 100000;
        int min = 500;
        int likes = (int) ((Math.random() * (max - min)) + min);
        return repo.findById(id)
                .map(Story -> {
                    Story.setCompany_id(st.getCompany_id());
                    Story.setUser_id(st.getUser_id());
                    Story.setTitle(st.getTitle());
                    Story.setContent(st.getContent());
                    Story.setPosted(new Date());
                    Story.setLikes(likes);
                    Story.setStatus();
                    return repo.save(Story);
                })
                .orElseGet(() -> {
                    return null;
                });
    }



}