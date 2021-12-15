For this project, I built a quote generator from Terry Pratchett's Discworld novels. Instead of an API, this time I provided the quotes as an array of JS objects. I also combined the project with a digital clock that appears on the right corner of the page. I used Bootstrap 5 hoping it'll create a responsive design.

* I started the project by creating two objects; first object was a key-value pair of book titles and quotes. The second object was the book cover images. Then I combined them with an if clause. It worked, but it was a loong code:) So I refactured it into an array of objects. (Stored the original code on firstversion branch)
* Lighthouse suggested that I should use avif image as the background image. It works on Chrome, but not on other browsers. I tried adding a fallback background image, but it didn't improve my performance on Lighthouse report. I ended up using jpg.

## The problems I couldn't solve (yet):
* I couldn't fade in and fade out the quotes when they're generated onclick. If I had  managed that, this would've been a different page:)
* The background image on mobile-portrait wasn't centered and I was only able to see a portion of the image. I tried a few solutions like uploading a small-scaled image, along with various css properties, but only decreasing the height of the image worked. 
* I had the same problem with fading in the button, so I used a setTimeout function on it. 
* I also wanted to fix the position of the button, so that it won't move due to length of the quote. It overlapped with the book-covers or quotes on other devices.
* I wanted to use small-caps instead of uppercase, but couldn't find a way to do it. (style.fontVariant = "small-caps" changes the whole quote and even I was able to get the uppercased words with regex, i couldn't figure out how I could replace them with small-caps.) So I used a small-caps font generator, not quite satisfied with the outcome though.
* (Using vertical-align: middle on font-awesome aligned the icon, haven't tried yet but I guess that will also solve my tweet bird problem from the previous challenge.)
