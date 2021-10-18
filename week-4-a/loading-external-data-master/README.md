# Instructions for running CHT2531 JavaScript Exercises

1. Download or clone the repository.
2. Inside this folder there are a number of files. Here are the ones we are interested in:

* *index.html*. This is the HTML file that is used in practical exercises. This HTML file uses a JavaScript file, exercises.js
* *exercises.js*. Open this in a text editor of your choice. This is where you will write your JavaScript. It already contains some code to get you started. It also contains the exercise questions (in comments, leave these questions commented out).
* *notes.md*. View this via GitHub. These are some notes that will help you provide solutions to the exercises.

## To load external data you must use a web server
To complete the exercises this week you will need to run *index.html* from a web server.

There are a number of ways to do this.

### Using atom-live-web-server
We can install a web server as an atom package. Similar 'packages' are available in other text editors e.g VS Code.
* Open atom
* Select file>Open folder and select this folder
* Select file>settings>install
* The install packages menu should appear
* Search for 'atom-live-server'
* Click the install button
* Once it is installed
* Select packages>atom-live-server->start server


### Using HTTP-SERVER
There is a node.js package *http-server*. To use it, do the following:
* Open a node.js command prompt
* Enter
```
npm install http-server -g
```
* Navigate to the folder where you want to serve web pages from and enter
```
http-server
```
* Open a web browser and enter http://localhost:8080.
