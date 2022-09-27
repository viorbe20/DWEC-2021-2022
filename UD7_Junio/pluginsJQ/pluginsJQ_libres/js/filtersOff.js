jQuery.fn.filtersOff = function () {
  return this.css({
    filter: "grayscale(0%) contrast(100%)"
  });
};