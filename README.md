https://sedcakmak.github.io/quote-generator-2/

For this project, I built a quote generator from Terry Pratchett's Discworld novels. Instead of an API, this time I provided the quotes as an array of JS objects. I also combined the project with a digital clock that appears on the right corner of the page. I used Bootstrap 5 hoping it'll create a responsive design.

* Lighthouse suggested that I should use avif image as the background image. It works on Chrome, but not on other browsers. I tried adding a fallback background image, but it didn't improve my performance on Lighthouse report. I ended up using jpg.
* The images for the book covers didn't work on GitHub page, (checked console to see a 404Error). I corrected the path, now it's working.
* I wanted to use small-caps instead of uppercase, but couldn't find a way to do it. (style.fontVariant = "small-caps" changes the whole quote and even I was able to get the uppercased words with regex, i couldn't figure out how I could replace them with small-caps.) So I used a small-caps font generator, not quite satisfied with the outcome though.
* Also, I couldn't fade in and fade out the quotes when they're generated onclick. If I had managed that, this would've been a different page:)

