var answer = prompt("Do you wipe?");
console.log(answer);
if (answer === 'yes') {
    alert('you are a genius');
}
else if (answer === 'no') {
    alert('please stay away from all people');
}
else if (answer === 'maybe') {
    alert('sort out your priorities');
}
else {
    alert('time to ponder the meaning of life');
}
var hoarder = prompt("Are you a toilet paper hoarder?");
if (hoarder === 'yes') {
    alert('okay, youre not the only human that exists');
}
else if (hoarder === 'no') {
    alert('keep fighting the good fight');
}
else if (hoarder === 'maybe') {
    alert('your guilt speaks volumes');
}
else {
    alert('oh so you ARE');
}
function quantity(){
    var answer = prompt("How many rolls of toilet paper do you think you need?");
    var album = '';
    var pic = '<img src="https://www.staples-3p.com/s7/is/image/Staples/sp41688553_sc7?wid=512&hei=512">';
    while (answer === '' || isNaN(answer)){
        answer = prompt('Please answer')
    }
    for (i = 0; i < answer; i++) {
        album = album + pic;        
    }
    document.getElementById("again").innerHTML = album;
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