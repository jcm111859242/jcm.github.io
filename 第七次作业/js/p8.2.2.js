var js = document.querySelectorAll(".page .top .tab");
for (var i = 0; i < js.length; ++i) {
  js[i].onclick = function () {
    for (var j = 0; j < js.length; ++j) {
      js[j].style.background = "#fff";
    }
    var text = document.querySelector(".page .bd");
    this.style.background = "silver";
    for (var k = 0; k < js.length; ++k) {
      if (js[k] === this) {
        text.innerHTML = k + 1;
        break;
      }
    }
  };
}


