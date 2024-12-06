import { Appbar } from "../Components/appbar"
import { Blogcard } from "../Components/Blogcard"


export const Blogs = ()=>{
    return(
        <>  
        <Appbar/>
        <Blogcard 
          author = {"abhilash"}
          title = {"The Worst Advice You Can Hear About ____"}
          content = {"It might be a sense of morbid curiosity. It might be a comparative way to see how good you’re actually doing. It might be a way to learn by contrast. Whatever the case, we all seem to be borderline obsessed with reading about bad advice. Take it a step further to make it the “worst” advice, and you’ll capture a ton of attention in your field of expertise. As for the source of your inspiration, that’s up to you. This can be advice you’ve actually heard, or a mistake you’ve seen made reduced to advice form. As long as it’s a bit nasty, you’ll be in business."}
          date = {"6th dec"}
          />
          

        
        </>
    )
}