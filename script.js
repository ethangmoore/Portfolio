$(document).ready(function () {
  $("i").hover(
    function () {
      $(this).css("font-size", "60px");
    },
    function () {
      $(this).css("font-size", "30px");
    });
});

let request = new XMLHttpRequest();
request.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var data = JSON.parse(this.responseText);
    document.getElementById("repos1").innerHTML = data[1].name;
  };
};
request.open("GET", "https://api.github.com/users/ethangmoore/repos", true);
request.send();