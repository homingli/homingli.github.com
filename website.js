$(function (){ 

        $('#navbar').scrollspy();

        $('#myTab a, #inner-tab a').click(function (e) {
          e.preventDefault();
          $(this).tab('show');
        })


//http://css-tricks.com/snippets/jquery/smooth-scrolling/

  function filterPath(string) {
  return string
    .replace(/^\//,'')
    .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
    .replace(/\/$/,'');
  }

  var locationPath = filterPath(location.pathname);
  var scrollElem = scrollableElement('html', 'body');
 
  $('a[href*=#]').each(function() {
    var thisPath = filterPath(this.pathname) || locationPath;
    if (  locationPath == thisPath
    && (location.hostname == this.hostname || !this.hostname)
    && this.hash.replace(/#/,'') ) {
      var $target = $(this.hash), target = this.hash;
      //if (target) {
      if ((target == "#cover") || (target == "#awards") || 
            (target == "#profile") || (target == "#portfolio") ||
            (target == "#contact")) {
        var targetOffset = $target.offset().top;
        $(this).click(function(event) {
          event.preventDefault();
          $(scrollElem).animate({scrollTop: targetOffset}, 400, function() {
            location.hash = target;
          });
        });
      }
    }
  });
 
  // use the first element that is "scrollable"
  function scrollableElement(els) {
    for (var i = 0, argLength = arguments.length; i <argLength; i++) {
      var el = arguments[i],
          $scrollElement = $(el);
      if ($scrollElement.scrollTop()> 0) {
        return el;
      } else {
        $scrollElement.scrollTop(1);
        var isScrollable = $scrollElement.scrollTop()> 0;
        $scrollElement.scrollTop(0);
        if (isScrollable) {
          return el;
        }
      }
    }
    return [];
  }


//https://github.com/twitter/bootstrap/issues/3351
$('.modal:has(.carousel)').on('shown', function() {
  var $carousel = $(this).find('.carousel');

  if ($carousel.data('carousel') && $carousel.data('carousel').sliding) {
    $carousel.find('.active').trigger($.support.transition.end);
  }

  $carousel.carousel({ interval: 2500 });
});

$('.modal:has(.carousel').on('hidden', function() {
  $(this).find('.carousel').carousel('pause');
});

// need some more work...
$('a[href*=#]:not(.dropdown-toggle)').on('shown', function(e) {
  var pattern=/#.+/gi;
  var last_id=e.relatedTarget.toString().match(pattern).toString();
  var this_id=e.target.toString().match(pattern).toString();
  var $l_carousel = $(last_id+":has(.carousel)").find('.carousel');
  var $carousel = $(this_id+":has(.carousel)").find('.carousel');
  if ($l_carousel.length == 1) {
     $l_carousel.carousel('pause');
  }
  if ($carousel.length === 1) {
      if ($carousel.data('carousel') && $carousel.data('carousel').sliding) {
        $carousel.find('.active').trigger($.support.transition.end);
      }
      $carousel.carousel({ interval: 2500 });
  }
});

});
