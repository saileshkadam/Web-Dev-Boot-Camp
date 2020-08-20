//Check off TODOs by Clicking
$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

//Click X to remove TODO
$("ul").on("click", "span", function () {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });

  event.stopPropagation();
});

$("input[type='text']").keypress(function (event) {
  if (event.which == 13 && $(this).val() != "") {
    $("ul").append(
      "<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " +
        $(this).val() +
        "</li>"
    );
    $(this).val("");
  } else {
    //Do Nothing
  }
});

//Minimize input on minus click
$(".fa-minus").click(function(){
    $("input").fadeToggle("0.5","linear");
})
