prompt("Do you wipe?");

var answer = prompt("Do you wipe?");
if (answer === 'yes') {
    alert('you're a genius');
}
else if (answer === 'no') {
    alert('please stay away from all people);
}
else if (answer === 'maybe') {
    alert('sort out your priorities');
}
else {
    alert('time to ponder the meaning of life');
}
var answer = prompt("Are you a toilet paper hoarder?");
if (answer === 'yes') {
    alert('okay, you're not the only human that exists');
}
else if (answer === 'no') {
    alert('keep fighting the good fight');
}
else if (answer === 'maybe') {
    alert('your guilt speaks volumes);
}
else {
    alert('oh so you ARE');
}
function myFunction() {
    var txt;
    var r = confirm("You don't hoard toilet paper");
    if (r == true) {
      txt = "You get a gold star! (actually you just get admiration)";
    } else {
      txt = "I KNEW it.";
    }
    document.getElementById("demo").innerHTML = txt;
  }