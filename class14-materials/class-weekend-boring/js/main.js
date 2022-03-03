//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase()

  switch (day) {
  case "tuesday":
  case "thursday": 
    console.log("YOU HAVE CLASS"); break;
  case "saturday":
  case "sunday":
    console.log("Its The Weekend"); break;
  default:
    console.log("BORING");
  }
}
