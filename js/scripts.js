$(document).ready(function(){
  $("#blanks form").submit(function(event) {
    var userNameInput = $("input#userName").val();
    var bestFriendInput = $("input#bestFriend").val();
    var animalInput= $("input#animal").val();
    var exclamationInput = $("input#exclamation").val();
    var verbInput = $("input#verb").val();
    var nounInput = $("input#noun").val();

    var streetAddressInput = $("input#streetAddress").val();
    var cityInput = $("input#city").val();
    var stateInput = $("input#state").val().toUpperCase();
    var zipCodeInput = $("input#zipCode").val();

    $(".userName").text(userNameInput);
    $(".bestFriend").text(bestFriendInput);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);

    $(".streetAddress").text(streetAddressInput);
    $(".city").text(cityInput);
    $(".state").text(stateInput);
    $(".zipCode").text(zipCodeInput);

    $("#letter").show();

    event.preventDefault();
  });
});
