jQuery.fn.choseEffect = function (effect) {
  switch (effect) {
    case "hide":
      return this.hide();
      break;
    case "show":
      return this.show();
      break;
    case "slideUp":
      return this.slideUp();
      break;
    case "slideDown":
      return this.slideDown();
      break;
    default:
      return this.slideToggle();
  }
};