// Magic 8 Ball

// Add Event Listener
document.getElementById("mybutton").addEventListener("click", imgClicked);

function imgClicked() {
  // Specified Response - Chained
  let question = document.getElementById("question-in").value.toLowerCase();
  if (question === "does a magic 8 ball actually work?") {
    document.getElementById("ans-in").innerHTML = "How dare you doubt me!";
  } else if (question === "is javascript awesome?") {
    document.getElementById("ans-in").innerHTML = "Of Course!";
  } else if (question === "") {
    document.getElementById("ans-in").innerHTML = "Please ask a question";
  } else {
    // Random Response - Chained
    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.2) {
      document.getElementById("ans-in").innerHTML = "Without a Doubt.";
    } else if (randNum < 0.4) {
      document.getElementById("ans-in").innerHTML = "As I see it, yes.";
    } else if (randNum < 0.6) {
      document.getElementById("ans-in").innerHTML = "Don't count on it.";
    } else if (randNum < 0.8) {
      document.getElementById("ans-in").innerHTML =
        "Concentrate and ask again.";
    } else {
      document.getElementById("ans-in").innerHTML = "Outlook not so good.";
    }
  }
}
