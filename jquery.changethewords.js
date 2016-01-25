(function($) {
  $.fn.changeWords = function(options) {
    var settings = $.extend({
      time: 1500,
      animate: "zoomIn",
      selector: "span"
    }, options);
    var wordCount = $(settings.selector, this).size();
    var words = $(settings.selector, this);
    words.filter(function() {
      return $(this).attr("data-id") != "1"
    }).css("display", "none");
    var count = 1;
    setInterval(function() {
      ++count;
      var wordOrder = count;
      words.filter(function() {
        return $(this).attr("data-id") == wordOrder
      }).addClass("animated " + settings.animate).css("display", "inline-block");
      words.filter(function() {
        return $(this).attr("data-id") != wordOrder
      }).css("display", "none").removeClass();
      if (count == wordCount) {
        count = 0;
      }
    }, settings.time);
  }
}(jQuery));
