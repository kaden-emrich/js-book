/*    JavaScript 7th Edition
      Chapter 2
      Project 02-03

      Application to return the shape of a clicked object
      Author: Kaden Emrich
      Date:   04/10/2024

      Filename: project02-03.js
 */

const feedback = document.getElementById("feedback");

function resetFeedback() {
      feedback.innerHTML = "";
}

document.getElementById("square").onmouseenter = () => {
      feedback.innerHTML = "You're hovering over the square";
}
document.getElementById("square").onmouseleave= resetFeedback;

document.getElementById("triangle").onmouseenter = () => {
      feedback.innerHTML = "You're hovering over the triangle";
}
document.getElementById("triangle").onmouseleave= resetFeedback;

document.getElementById("circle").onmouseenter = () => {
      feedback.innerHTML = "You're hovering over the circle";
}
document.getElementById("circle").onmouseleave= resetFeedback;