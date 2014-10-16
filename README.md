#HTML Clock

> Display an HTML rendered functioning clock. Probably useless, but it was interesting to code.

![HTML Clock](http://urbanoalvarez.es/HTML-Clock/misc/html-clock.gif)

##Installation
Download the source code and include the files in the `src` folder (css and js). You can obviously customize the css to your needs.

It requires jQuery to work, so make sure it's included before the `html-clock.js` script.

##Usage
Add the following HTML, the `.clock` container is optional, you can have the clock occupy the full screen if you want.

```html
<div class="clock">
  <div class="htmlClock" id="clock1">
    <div class="htmlClock-visor"></div>
    <div class="htmlClock-view hourView"></div>
    <div class="htmlClock-view minuteView"></div>
    <div class="htmlClock-view secondView"></div>
  </div>
</div>
```

Now add the following script:

```javascript
$(document).ready(function(){
  var clock = new HTMLClock();

  clock.init({
    container: $('#clock1')
  });
});
```

##Settings
The `init` method takes one argument that is the settings used. You can set the following:

| Parameter   |      Values      |  Description |
|-------------|------------------|--------------|
| container   | `$('#element')`    | jQuery element where the clock should appear |

##Roadmap
The HTML clock is in a very early version, I have only spent a couple of hours on it so far, so lots of improvements need to be made. Feel free to create an issue if you spot anything that could be improved.

Future development:
* Adjustable size: Probably with a setting that will multiply all the sizes.
* Themes: Add a couple of css files that will change the appearance of the clock.
* Responsive: Similar to the adjustable size, but adapting to the container. It kind of works already, except for the fonts.

##License
The HTML Clock is released under the GNU GPLv2 License.
