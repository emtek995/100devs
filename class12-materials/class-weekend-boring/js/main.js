document.querySelector('#check').addEventListener('click', check)
function check() {
  const day = document.querySelector('#day').value.toLowerCase()
  //Conditionals go here
  switch (day) {
    case 'monday': 
    case 'wednesday': 
    case 'friday': document.querySelector('#placeToSee').innerHTML = 'boring'; break;
    case 'tuesday': 
    case 'thursday': document.querySelector('#placeToSee').innerHTML = 'class'; break;
    case 'saturday': 
    case 'sunday': document.querySelector('#placeToSee').innerHTML = 'weekend'; break;
    default: document.querySelector('#placeToSee').innerHTML = 'not a day'; break;
  }
}