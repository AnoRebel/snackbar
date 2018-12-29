# SnackBar/Toast
A simple configurable toast/notification/snackbar made from pure Javascript and CSS3.

I did this as a simple project to help me not have to create a notification system everytime in my projects..

This is by all means my own test project, meaning it will be improved whenever I can, its a dirty way to do it, but this works for me, so....

## Installation and Update
* To use this little code snippet, simply copy the code or clone the repo..
```sh
git clone https://github.com/anorebel/snackbar.git
```
* To update, just do a pull, or redownload
```sh
git pull
```
* Then make sure the ```snackbar.css``` is at the top(in the head tag) of your project, like so..
```html
<link rel="stylesheet" href="snackbar.css" />
```
* Then add the ```snackbar.js``` script tag at the bottom of your project(right before ending the body tag), like so..
```html
<script src="snackbar.js"></script>
```
* From here, you're good to go..

## Usage
Its implementation for now is slightly lame, but i'll find a way to implement more properly, or you can use the code to implement it in your own way..

The snippet uses CSS classes to style and a Html id tag to call from a click event listener..

Class           | Usage
--------------- | -----
snack           | The main class to add the snack(Compulsory)
s-title         | The class for a \<p> or a \<div> for your title(optional if s-content used)
s-content       | The class for \<p> or a \<div> for the content(optional is s-title used)
s-center        | This class centers the snack on the middle of the screen
s-bottom-left   | This class places it in the bottom-left side of the screen
s-bottom-right  | This class places it in the bottom-right side of the screen
s-bottom-center | This class places it in the bottom-center of the screen
s-top-left      | This class places it in the top-left side of the screen
s-top-right     | This class places it in the top-right side of the screen
s-top-center    | This class places it in the top-center of the screen

## Themes
Using [bootstrap](https://getbootstrap.com) 4 colors, I made similar themes too..
* Default is transparent

Theme(class)| Style
------------| -----
s-info      | light-blue-ish
s-danger    | red-ish
s-primary   | blue-ish
s-warning   | yellow-ish
s-dark      | dark
s-light     | light
s-grey/gray | gray
s-success   | green-ish

## Examples
Some examples of its usage..

The main part to call the snippet is an ```id``` called ```snack```, which I've binded it to a click event listener, where you can alter as you see fit in the ```snackbar.js```..

Here is a button example..
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>SnackBar</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="snackbar.css" />
</head>
<body>
    <!-- Main id to call the snippet -->
    <button id="snack">Click</button>
    <!-- Our snippet -->
    <div class="snack s-center s-dark">
        <p class="s-title"> Snippet Title</p>
        <p class="s-content">Snippet Content</p>
    </div>
    <script src="snackbar.js"></script>
</body>
</html>
```
* When you press the button, the snippet appears
* If you wait for 8 seconds, it disappears
* If you click the snippet, it also disappears

## TODO
- [ ] Make it with pure Javascript Snippet
- [ ] Format the code, make it cleaner and prettier