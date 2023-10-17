
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
public class StoryController {

    private StoryService storyService;

    @Autowired
    public StoryController(StoryService storyService){
        this.storyService = storyService;
    }

    //get story based on id
    @GetMapping("/story")
    public Story getstory(@RequestParam int id) {
        Optional st = storyService.getStory(id);
        if(st.isPresent()){
            return (Story) st.get();
        }
        return null;
    }

   //get all stories from the database
   @GetMapping("/story/all")
   public List<Story> getAllstory() {
       return storyService.getAllStory();
   }

   //post story to the database
   @PostMapping("/story/post")
   public void addStory(@RequestBody Story new_story) {
       storyService.addStory(new_story);
   }

   //update story on to the database
   @PutMapping("/story/update")
   public void updateStory(@RequestBody Story new_story, @RequestParam int id){
       storyService.updateStory(new_story, id);
   }

    //delete things on the database
    @DeleteMapping("/story/delete")
    public void deleteStory(@RequestParam int id){
            storyService.deleteStory(id);
    }

}