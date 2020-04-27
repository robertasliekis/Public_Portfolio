window.onload = function () {
  var dotCount = 30;
  var hundredPointsArray = [];
  for (var i = 0; i < dotCount; i++) {
    hundredPointsArray +=
      '<div id="cubeID" class="cube point-' + i + '"></div>';
  }
  var containerHundredPoints = document.querySelector(".background-container");
  containerHundredPoints.innerHTML = hundredPointsArray;

  for (var i = 0; i < dotCount; i++) {
    var sheet = document.createElement("style");
    var circle = document.querySelectorAll(".cube");

    var colors = ["cyan", "rgb(218, 0, 218)", "rgb(0, 69, 218)"];
    var colorRandom = colors[Math.floor(Math.random() * colors.length)];

    positionDot = Math.floor(Math.random() * 35) + 1 + i * 25;
    animationDurationDot = 15 + i * 3;
    sheet.textContent =
      "" +
      ".cube.point-" +
      i +
      " {" +
      "-webkit-animation-name: animPoint-" +
      i +
      ";" +
      "background-color:" +
      colorRandom +
      ";" +
      "animation-duration:" +
      animationDurationDot +
      "s;" +
      "}" +
      "@-webkit-keyframes animPoint-" +
      i +
      " {" +
      "0% { transform: rotate(0deg) translate(" +
      positionDot +
      "px) rotate(0deg);" +
      "}" +
      "100% { transform: rotate(360deg) translate(" +
      positionDot +
      "px) rotate(-360deg);" +
      "}";

    circle[i].appendChild(sheet);
  }

  $(".cube").append("<div class=" + "line-container" + "></div>");
};

activeNumber = 0;
timesClicked = 0;
$(".button2").click(function () {
  let number = this.id;
  var wordLength = number.length;
  number = number.substring(wordLength - 1, wordLength);

  if (activeNumber != number) {
    activeNumber = number;
    timesClicked = 0;
  }

  for (i = 1; i < 7; i++) {
    if (timesClicked % 2 == 0) {
      if (number == i) {
        $(".project" + number).addClass("project-open");
      } else {
        $(".project" + i).removeClass("project-open");
      }
    } else {
      $(".project" + i).removeClass("project-open");
    }
  }

  timesClicked++;
  if (timesClicked > 1) {
    timesClicked = 0;
  }
});

//Scroll to top button start

const scrollToProjects = document.querySelector("#button-scroll");
projectsOffset = $(".projects-section").offset().top + 48;
scrollToProjects.addEventListener("click", function () {
  $("html,body").animate({ scrollTop: projectsOffset }, "slow");
});

//Scroll to top button start
