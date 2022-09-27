$(function () {
//Usa un plugin que hace desaparecer el elemento seleccionado
    $("#btn_h2").click(function (e) { 
        $("h2").hideElement();
    });

    $("#btn_div").click(function (e) { 
        $("div").hideElement();
    });

    $("#btn_p").click(function (e) { 
        $("p").hideElement();
    });
});