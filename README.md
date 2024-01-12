# Avatar: The Last Airbender 
## CanCode Communities JavaScript Fundamentals Final Project

This project allows you to get random a Avatar: The Last Airbender(ATLA) characters or search for one!

## Introduction

The purpose of this project is to showcase the skills I learned in my CanCode Communities JavaScript Fundamentals Course, specifically these concepts:
- Fundamentals of JavaScript
- AJAX and HTTP(s) requests
- Working with the DOM and events
- Structuring my project

## Live Demo

## Features and Basics
Features for this project include:
- Clicking on Avatar Aang to enter to the main page
- Searching for an ATLA Character to populate a character on the web page
- Clicking a button to randomly populate a character on the web page
- Play an ATLA Gameboy Advance Game!

## Technologies Used
- Bootstrap
- JavaScript
- Node.js

## Hurdles and Solutions
During the development of this project, I encountered several hurdles related to API requests and css styling.

#### Issue 1: API Request Data Mismatch
Problem: When searching for a character, it was not actually making the call to the api resulting in an error HTTP Request 

- Solution: To resolve this issue, I performed the following steps:
  Used Postman to replicate the HTTP request to ensure I was properly inputting the correct request with the correct header requests.

- Code Review: I thoroughly reviewed my code to identify the source of the problem.

#### Issue 2: Creating a Gameboy Advance with CSS
Problem: I originally wanted to create a Gameboy Advance from pure CSS as I had found the Avatar CSS on the index.html from [Zach Hoskins'](https://github.com/zachos-tech) [codepen!](https://codepen.io/zachos/pen/eYJqQBw)

- Solution: As I could not figure out how to curve both top corners of a div using -webkit-mask-image:

I found a transparent high-quality drawing of a Gameboy Advance(GBA)
I wrapped the iframe embedded code of the GameBoy Advance game in a div and gave it a class of outer, then in css I sent the background image of this div to the image drawing of GBA and sent the z index of the iframe so it would be properly placed in front of the image.

By addressing these hurdles, I was able to improve the functionality and user experience of my project. This documentation serves as a reference for future development and troubleshooting.


Acknowledgments:

- [Paige Gorry's](https://github.com/paigeegorry) [ATLA Api](https://github.com/paigeegorry/last-airbender-api) used to make the api calls
- [RetroGames.cc](https://www.retrogames.cc/gameboyadvance-games/avatar-the-last-airbender-u-rising-sun.html) for the embedded GBA ATLA game 
- [FreeIconsPng.com](https://www.freeiconspng.com/img/17233) for the cripsy high quality image of the GameBoy Advance
&
- [Zach Hoskins'](https://github.com/zachos-tech) [codepen](https://codepen.io/zachos/pen/eYJqQBw) of a interactive Avatar Aang!
