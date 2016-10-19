particlesJS('particles-js', {"particles":{"number":{"value":100,"density":{"enable":true,"value_area":500}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":3},},"opacity":{"value":1,"random":true,"anim":{"enable":false,"speed":.5,"opacity_min":0.1,"sync":false}},"size":{"value":5,"random":true,"anim":{"enable":false,"speed":20,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":100,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":3,"direction":"top","random":false,"straight":false,"out_mode":"out","attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":200,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});
$("img.lazy").lazyload({effect : "fadeIn"});
$("div.lazy").lazyload({effect : "fadeIn"});
      
$(function () { $("input,select,textarea,checkbox").not("[type=submit]").jqBootstrapValidation(); } );
$.expr[":"].external=function(t){return!t.href.match(/^mailto\:/)&&t.hostname!=location.hostname&&!t.href.match(/^javascript\:/)&&!t.href.match(/^$/)},$("a:external").attr("target","_blank");
      
var $grid=$("#grid");$grid.imagesLoaded(function(){$grid.isotope({itemSelector:".element-item"})});var filterFns={numberGreaterThan50:function(){var a=$(this).find(".number").text();return parseInt(a,10)>50},ium:function(){var a=$(this).find(".name").text();return a.match(/ium$/)}};$(".filters-button-group").on("click","button",function(){var a=$(this).attr("data-filter");a=filterFns[a]||a,$grid.isotope({filter:a})}),$(".button-group").each(function(a,b){var c=$(b);c.on("click","button",function(){c.find(".is-checked").removeClass("is-checked"),$(this).addClass("is-checked")})});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-39281104-2', 'auto');
ga('send', 'pageview');
