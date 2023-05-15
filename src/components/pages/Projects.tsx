import React from "react";
import ProjectItem from "../ProjectItem";
import './Projects.css'

function Projects() {
  return (
    <div className="projects-container">
      <h1>What I have done</h1>
      <br/>
      <ProjectItem
        src="images/spacegame.gif"
        title="Space Explorers"
        description="A game I designed where the objective is that the robot must pass through the planet. The robot must walk and jump through each level to try to get to 
        the next level. It also must avoid the aliens or it will die. I made this game using the Intellij IDE and coded this in Java. In order to make it run, I used threads
        The game was drawn on a canvas using the JFrame. In order to make the sprites (alien, robot and bullet) stand and interact with each other, I made functions for 
        each interaction (sprite with sprite, sprite with tile). I used booleans to check the surrounding tiles of the sprite. The tiles and space were represented with char.
        each level was loaded by calling a method which took a number. Each level was represented by a number. Once the user got to the end of the level, the number incremented
        and the next level was loaded. The game also has music running in the background too."
        link = "https://github.com/JoeliRosas20/TheSpacePlatformer"
      />
      <br/>
      <ProjectItem
        src="images/ExerciseSite.png"
        title="Exercise Site"
        description="A site I designed where I wanted to keep track of my workouts. I made different pages based on the muscles I wanted to workout. I did not like the design 
        of other workout apps and the paywalls was another reason. I also wanted to be able to easily see it where I had it recorded on my phone's notes app. This site was created 
        using HTML, CSS and vanilla JS. The site can add exercises, edit the exercise and delete exercises. I hosted the site on 000WebHostServer000 becauase it was free and I am 
        able to easily see changes on the site. "
        link="https://github.com/JoeliRosas20/JoeyExercise"
      />
      <br/>
      <ProjectItem
        src="images/OldPortfolioSite.png"
        title="Resume Site"
        description="(The photo you see here is the old portfolio site I made) A site I made to showcase myself. Just like the one you see here, It had a home page, About Me page, 
        Projects Page and Contact Info page. The home page only showed a small image of me and a small message below it. There About Me page had a small summary about me with a link
        to my resume. The Projects Page has a link to the game I was making. The link leads to a page that showed my progress of the game which was under development at the time the 
        site was made. I did not use frameworks there compared to this one. The framework I used here was bootstrap. I decided to make a revised version since I wanted to pick up ReactJS and 
        stay up to date with it."
        link="https://github.com/JoeliRosas20/portfolio-site"
      />
    </div>
  );
}

export default Projects;
