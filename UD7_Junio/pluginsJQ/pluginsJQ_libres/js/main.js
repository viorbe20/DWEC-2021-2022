$(function () {
  //Efecto gris
  $("#greyOn").click(function (e) {
    if ($("#input1").val() == "") {
      $(".box").greyOn();
    } else {
      let grayScale = "grayscale(" + $("#input1").val() + "%)";
      $(".box").greyOn({ filter: grayScale });
    }
  });

  $("#contrastOn").click(function (e) {
    if ($("#input1").val() == "") {
      $(".box").contrastOn();
    } else {
      let contrast = "contrast(" + $("#input1").val() + "%)";
      $(".box").contrastOn({ filter: contrast });
    }
  });

  $("#filtersOff").click(function (e) {
    $(".box").filtersOff();
  });

  //Esconde y muestra las fotos
  $("#toggle").click(function (e) {
    if ($("#input2").val() == "") {
      $(".box").showHideToggle();
    } else {
      let $box = "#" + $("#input2").val();
      $($box).showHideToggle();
    }
  });

  $("#picUp").click(function (e) {
    if ($("#input2").val() == "") {
      $(".box").choseEffect("slideUp");
    } else {
      let $box = "#" + $("#input2").val();
      $($box).choseEffect("slideUp");
    }
  });

  $("#picDown").click(function (e) {
    if ($("#input2").val() == "") {
      $(".box").choseEffect("slideDown");
    } else {
      let $box = "#" + $("#input2").val();
      $($box).choseEffect("slideDown");
    }
  });

  //Se indica el efecto como parámetro
  $("#hideWords").click(function (e) {
    $("figcaption").choseEffect("hide");
  });

  $("#showWords").click(function (e) {
    $("figcaption").choseEffect("show");
  });
  $("#slideUp").click(function (e) {
    $("figcaption").choseEffect("slideUp");
  });
  $("#slideDown").click(function (e) {
    $("figcaption").choseEffect("slideDown");
  });
  $("#slideToggle").click(function (e) {
    $("figcaption").choseEffect();
  });
});
