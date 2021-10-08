# Intro to Sass with Koala
## Setting up
* Open Koala
* Download this repository.
  * Open *index.html* and *style.scss* in a text editor. *style.scss* is where we will write our Sass code.
* Open the web page in a browser.
* Drag the folder that contains *index.html* onto Koala.
  * Make sure you select the correct folder. Koala expects there to be a *sass* folder inside the folder you select.
* Koala should automatically detect the *style.scss* in the sass folder and generate a CSS file for you based on this file *.scss* file. Check you can find this generated CSS file. It should be in a folder called css.
* Refresh *index.html* in a browser, it should now have some CSS applied.
* Take a moment to make sure you understand what has happened.
* The basic workflow is to make changes to *style.scss*. Koala will then compile this for us into plain CSS. We can then refresh the browser to see the changes.

## Re-write the CSS using Sass
Now experiment with the basic feature of Sass. The following link explains the basics of Sass - https://sass-lang.com/guide. Try the following:
1. Use Sass variables instead of hard coded font and colour names. The *.scss* already uses a variable for the text colour.
2. Put your variables in a separate *_vars.scss* partial file. Use an *import* to load them into *style.scss*. see https://sass-lang.com/documentation/at-rules/import . Import is being phased out but, the newer methods don't work in Koala.
3. Experiment with using mixins, nesting and extends. You should be able to reduce the amount of CSS and make it easier to maintain.
