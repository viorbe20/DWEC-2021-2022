jQuery.fn.hideElement = function () {
  return this.fadeOut(250, function () {
      $(this).fadeIn(250);
    });
};