# work-day-scheduler
For this project we were assigned to create a day planner that would display in a certain way, and save any edits that were made to the schedule. To do this I used the prexisting CSS template that was provided for us. I organized the schedule with a div time block that was a row surrounding the other elements. Within the row there was a hour block that had a col-1, a text input block that had a col-10 and a save button with a col-1 as well. I then did the coloring through the javascript. Any of the our blocks that had already past were displayed in grey, any that were in the future were green, and the red one was the present time slot. To match the hour with the corresponding color I had to use some interesting indexing methods. I decdided upon the following code snippet to findout what hour I was in:
```
parseInt(hours[i].innerHTML.split(" ")[0], 10))
```

So that anything entered into the calender would save, I created an on click event that was triggered when the save button was clicked. I saved all the items in an object that would populate the calender at the start of the script. If the values in the object were undefined then it would not populate. Finaly I added the date at the top of the page so that 

![](Password-Generator.gif)

## Getting Started

To get this project running, one must copy the files from the class repository.

### Prerequisites

To have this project run, one must download VS Code off the appstore, and create a GitHub account. Git is also required to run this program, which can be downloaded 

```
$ brew install git. 
```
Homebrew can also be downloaded by inputting the following command in the terminal:
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

### Installing

To install this project one must go through the GitHub website in order to clone this project. Clicking on the cone or download button and then copying the link that comes from that. One can then go into the Terminal application, and use the following command to copy the files:
`
git clone URL
`
This should then be moved to your desktop, or somewhere else on your computer. This will allow access to the html and css files. Opening the html file in a default browser will allow one to observe the website.

## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Deployed Link

* [See Live Site](https://aidansweeny.github.io/password-generator/)

## Authors

* Aidan Sweeny

- [Link to Github](https://github.com/AidanSweeny)
- [Link to LinkedIn](https://www.linkedin.com/in/aidan-sweeny-81075030/)

## License

This project is licensed under the MIT License 

## Acknowledgments

* Berkley Coding Bootcamp

