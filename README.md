For this project, I'll building a second quote generator, this time I'll be using the quotes I provided. I'll also combine the project with a digital clock that will appear on the corner of the page.

* I started the project by creating two objects; first object was a key-value pair of book titles and quotes. The second object was the book cover images. Then I combined them with an if clause. It worked, but it was a loong code:) So I refactured it into an array of objects.
* Lighthouse suggested that I should use avif image as the background image. It works on Chrome, but not on other browsers. I tried adding a fallback background image, but it didn't improve my performance on Lighthouse report. I ended up using jpg.
