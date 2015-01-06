## Website Performance Optimization portfolio project

I optimized this online portfolio for speed! In particular, I optimized the critical rendering path and made this page render as quickly as possible by applying the techniques I've picked up in the [Website Performance Optimization course.](https://www.udacity.com/course/ud884).

To get started, check out the repository and inspect the code.

### Getting started
You can view the page at <a href="patricko10.github.io/udportfolio">patricko10.github.io/udportfolio</a> and you can check my pagespeed scores:
* [index.html](https://developers.google.com/speed/pagespeed/insights/?url=http%3A%2F%2Fpatricko10.github.io%2Fudportfolio%2F&tab=mobile)
* [project-2048.html](https://developers.google.com/speed/pagespeed/insights/?url=http%3A%2F%2Fpatricko10.github.io%2Fudportfolio%2Fproject-2048.html)
* [project-webperf.html](https://developers.google.com/speed/pagespeed/insights/?url=http%3A%2F%2Fpatricko10.github.io%2Fudportfolio%2Fproject-webperf.html)
* [project-mobile.html](http://patricko10.github.io/udportfolio/project-mobile.html)
* [pizza.html](https://developers.google.com/speed/pagespeed/insights/?url=patricko10.github.io%2Fudportfolio%2Fviews%2Fpizza.html)

If you want to run it on your local machine. Download and unzip all files to a local directory, and then open the index.html with your favorite browser that runs JavaScript.

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>
