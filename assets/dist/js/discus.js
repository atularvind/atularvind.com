var disqus_config = function () {
this.page.url = $(location).attr('href');
};

(function() {
var d = document, s = d.createElement('script');
s.src = '//atularvind.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();