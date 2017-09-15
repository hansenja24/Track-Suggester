$(document).ready(function(){
  $("h2#start").click(function(){
    $("#body").fadeIn();
    $("#start").hide();
  });

  $("form#survey").submit(function(event){
    event.preventDefault();

    var question1Input = parseInt($("input:radio[name=question1]:checked").val());
    var question2Input = parseInt($("input:radio[name=question2]:checked").val());
    var question3Input = parseInt($("input:radio[name=question3]:checked").val());
    var question4Input = parseInt($("input:radio[name=question4]:checked").val());
    var question5Input = parseInt($("input:radio[name=question5]:checked").val());

    if(question4Input === 2 && question2Input === 3){
      $("#android").show();
    } else if (question2Input === 1 && question4Input === 1){
      $("#design").show();
    } else if (question4Input === 3 && question2Input === 3 && question5Input === 4){
      $("#net").show();
    } else if (question4Input === 3 && question2Input === 3 && question5Input != 4){
      $("#php").show();
    } else if (question4Input === 1 && question2Input ===3){
      $("#ruby").show();
    } else {
      if ((question1Input + question2Input + question3Input + question4Input + question5Input) <= 6){
        $("#design").show();
      } else if ((question1Input + question2Input + question3Input + question4Input + question5Input) > 6 && (question1Input + question2Input + question3Input + question4Input + question5Input) <= 10){
        $("#ruby").show();
      } else if ((question1Input + question2Input + question3Input + question4Input + question5Input) > 10 && (question1Input + question2Input + question3Input + question4Input + question5Input) <= 14){
        $("#android").show();
      } else if ((question1Input + question2Input + question3Input + question4Input + question5Input) > 14 && (question1Input + question2Input + question3Input + question4Input + question5Input) <= 17){
        $("#php").show();
      } else if ((question1Input + question2Input + question3Input + question4Input + question5Input) > 17 && (question1Input + question2Input + question3Input + question4Input + question5Input) <= 23){
        $("#net").show();
    }};

    $("button#submit").fadeOut();
    $("button#restart").show();
  });

  $("button#restart").click(function(){
    $("#design").hide();
    $("#php").hide();
    $("#android").hide();
    $("#ruby").hide();
    $("#net").hide();
    $("button#restart").fadeOut();
    $("button#submit").fadeIn();
  });

});
