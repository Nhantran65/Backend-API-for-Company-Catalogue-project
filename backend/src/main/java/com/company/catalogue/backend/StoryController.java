
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
public class storycontroller {

    private StoryService storyService;
    private storyRepo repo; //change repository here

    @Autowired
    public storycontroller(StoryService storyService){
        this.storyService = storyService;
    }

    //get story based on id
    @GetMapping("/story")
    public story getstory(@RequestParam int id) {
        Optional st = storyService.getStory(id);
        if(st.isPresent()){
            return (story) st.get();
        }
        return null;
    }

    //post things to the database
    @PostMapping("/story/add")
    public void addStory() {
        story story1 = new story(1, 2, 3, "cat in a hat", "A cat is in a hat", new Date(1999,01,01), 123);
        storyService.addStory(story1);
    }

    //update thing on to the database
    @PutMapping("/story/put")
    public void updateStory(@RequestParam int id){
        storyService.updateStory(id);
    }

    //delete things on the database
    @DeleteMapping("/story/del")
    public void deleteStory(@RequestParam int id){
            storyService.deleteStory(id);
    }

}