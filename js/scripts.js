if (window.innerWidth <= 1024) {
  $(".welcome-section").height(window.innerHeight);
}

window.addEventListener("resize", () => {
  $(".welcome-section").height(window.innerHeight);
});

window.onload = function () {
  var dotCount = 20;
  var hundredPointsArray = [];
  for (var i = 0; i < dotCount; i++) {
    hundredPointsArray += '<div  class="cube point-' + i + '"></div>';
  }
  var containerHundredPoints = document.querySelector(".background-container");
  containerHundredPoints.innerHTML = hundredPointsArray;

  for (var i = 0; i < dotCount; i++) {
    var sheet = document.createElement("style");
    var circle = document.querySelectorAll(".cube");

    var colors = ["cyan", "rgb(236, 70, 139)", "rgb(255, 255, 255)"];
    var colorRandom = colors[Math.floor(Math.random() * colors.length)];

    opacityDot = Math.random() + 0.1;
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
      "opacity:" +
      opacityDot +
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

const scrollToProjects = document.querySelector("#button-scroll");
projectsOffset = $(".projects-section").offset().top + 48;
scrollToProjects.addEventListener("click", function () {
  $("html,body").animate({ scrollTop: projectsOffset }, "slow");
});

$(document).ready(function () {
  $(".button-send").click(function (event) {
    var name = $(".name-text").val();
    var email = $(".email-text").val();
    var subject = $(".subject-text").val();
    var message = $(".message-text").val();
    var index = 0;
    var indexName = 0;
    var indexEmail = 0;
    var indexSubject = 0;

    if (name.length > 0) {
      $(".name-text").removeClass("input-border");
      $(".word1").removeClass("display-visible");
    } else {
      event.preventDefault();
      $(".alert-message").addClass("alert-message-visible");
      $(".word1").addClass("display-visible");
      $(".name-text").addClass("input-border");
      index++;
      indexName++;
    }

    if (email.length >= 5 && email.includes("@") && email.includes(".")) {
      $(".email-text").removeClass("input-border");
      $(".word2").removeClass("display-visible");
    } else {
      event.preventDefault();
      $(".alert-message").addClass("alert-message-visible");
      $(".word2").addClass("display-visible");
      $(".email-text").addClass("input-border");
      index++;
      indexEmail++;
    }

    if (subject.length > 0) {
      $(".subject-text").removeClass("input-border");
      $(".word3").removeClass("display-visible");
    } else {
      event.preventDefault();
      $(".alert-message").addClass("alert-message-visible");
      $(".word3").addClass("display-visible");
      $(".subject-text").addClass("input-border");
      index++;
      indexSubject++;
    }

    if (index == 0) {
      $(".alert-message").removeClass("alert-message-visible");
    } else if (index == 1) {
      for (i = 1; i < 4; i++) {
        $(".sign" + i).removeClass("display-visible");
      }
    } else if (index == 2) {
      if (indexName == indexEmail) {
        $(".sign1").removeClass("display-visible");
        $(".sign2").addClass("display-visible");
        $(".sign3").removeClass("display-visible");
      } else if (indexName == indexSubject) {
        $(".sign1").removeClass("display-visible");
        $(".sign2").addClass("display-visible");
        $(".sign3").removeClass("display-visible");
      } else if (indexEmail == indexSubject) {
        $(".sign1").removeClass("display-visible");
        $(".sign2").removeClass("display-visible");
        $(".sign3").addClass("display-visible");
      }
    } else if (index == 3) {
      $(".sign1").addClass("display-visible");
      $(".sign2").removeClass("display-visible");
      $(".sign3").addClass("display-visible");
    }
    index = 0;
  });
});
