function scuberGreetingForFeet(somenumber) {
  // Write your code here!
  let result;
  if (somenumber <= 400) {
    result = "This one is on me!";
  } else if (somenumber > 400 && somenumber < 2000) {
    result = "That will be twenty bucks.";
  } else if (somenumber > 2500) {
    result = "No can do.";
  } else {
    result = "I will gladly take your thirty bucks.";
  }

  return result;
}
somenumber(199);

function ternaryCheckCity(somecity) {
  // Write your code here!
  if (somecity === "NYC") {
    return "Ok, sounds good.";
  } else {
    return "No go.";
  }
}

function switchOnCharmFromTip(customertip) {
  // Write your code here!
  switch (customertip) {
    case "generous":
      return "Thank you so much.";
      break;
    case "not as generous":
      return "Thank you.";
      break;
    case "thanks for everything":
      return "Bye.";
      break;
  }
}
