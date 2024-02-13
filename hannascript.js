var love = setInterval(function () {
  // ... (your existing code for heart animation)
}, 500);

var i = 0;
var txt1 =
  "Hi Hanna.....!  <<               Now I want to say something special to you. <<<                So , Please read everything carefully...!                                                                           > When I saw you for the first time < You seem something special to me.  <<                  As the days go < you get closer to me....! <<                           I don't know the reason why your thoughts always resonate inside my mind...!                                                     > Everything about you is always interesting to me...!                     << I am somewhat nervous because I haven't said these words to anyone and I won't say to anyone in the future...!                                                     > I love my mom so much than anything else in this world....!                    << Now you are the only person  whom I love equally with my mom....!                                                             >I really like you Han.....! |                  <<<< Give me one chance to prove my love ...!";
var speed = 50;
typeWriter();

function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == '<')
      document.getElementById("text1").innerHTML += "<br>";
    else if (txt1.charAt(i) == '>')
      document.getElementById("text1").innerHTML = '';
    else if (txt1.charAt(i) == '|') {
      $(".bg_heart").css("background-image", "url('')");

      // Add a button dynamically after the text
      var button = $("<button>")
        .text("Click me!")
        .attr("id", "dynamicButton")
        .addClass("transparent-button")
        .css({
          "background": "transparent",
          "position": "absolute",
          "bottom": "0",
          "left": "50%",
          "transform": "translateX(-50%)"
        })
        .hide();
      $(".container").append(button);

      // Show the dynamically added button
      $('#dynamicButton').show();
    } else
      document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// Attach a click event handler to the button
$(document).on('click', '#dynamicButton', function () {
  alert('Button clicked!');
  // Add any other actions you want to perform when the button is clicked
});
