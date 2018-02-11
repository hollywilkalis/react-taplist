# Tap List

#### Tap list for hypothetical cider house, demonstrating use of React components, February 9, 2018

#### By Holly Wilkalis

## Description

_{This is a detailed description of your application. Its purpose and usage.  Give as much detail as needed to explain what the application does, and any other information you want users or other developers to have. }_

## Setup/Installation Requirements

* Open your Terminal or other tool used to access the command line.
* Navigate to the directory where you wish to save the files.
* Run command $ git clone https://github.com/hollywilkalis/react-taplist.git
* To navigate into the project directory run command $ cd react-taplist
* Run command $ npm install
* Run command $ npm start
* To launch the app run command $webpack-dev-server

You should now be able to view the project at http://localhost:8080/

## Known Bugs

At this time the project includes no interactivity, and all data is hardcoded into the appropriate components.

## Support and contact details

You can always find me at holly.wilkalis@gmail.com. 

## Technologies Used

Project uses React, JSX, ES6, npm, Weback, Lint, Babel, and React-Bootstrap

## Notes

Diagram of the project flow:
<img src="/app-sketches/App flowchart.png"/>

You can also find my planning sketches of the app views in the app-sketches folder.

Issues
* I had planned to reuse the hardcoded master taplist in two places: on the admin view and the taplist view. I didn't succeed in figuring this out by the end of the day so I wound up hardcoding it into two different components. Obviously this could be drier but I'm sure we'll get further into this soon. 
* I tried my best to determine all of the needed components at the beginning of the project, and came close, but did find that I needed to create a few more than originally planned. Wasn't a big deal to add them, but it did help me get a better handle on breakdown for future projects.
* I had a little trouble setting up Bootstrap and did eventually realize that React-Bootstrap is still based on an earlier version than the one we've been working with, which was frustrating but manageable once i found their documentation.
* Using local images was glitchy and I don't yet know why. Twice during the day images that were displaying fine suddenly stopped, and it took deleting and re-adding the images several times to get the app to recognize them again. 

### Thoughts on React vs. Angular development
* I find Angular projects easier to set up thanks to the CLI. I was able to get those up and running faster - I think I spent a solid 90 minutes getting the project going in React.
* I'm also not crazy about React-Bootstrap being outdated - integrating it with Angular went faster.
* I do like React's component approach to building and routing. There's a logic to I think works well when planning for the user interface design. Possibly a little more so than with Angular. (We'll see if I still feel that way once we start working on state and building interactive elements.)
* I really like the way React organizes and integrates script and styling so far. This week I was able to hit the ground running with it, and with this project I found that it's forcing me (in a good way) to really think about specificity, and planning how different elements will be used.

### License

MIT licensing

Copyright (c) 2018 **Holly Wilkalis**
