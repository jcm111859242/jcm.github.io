var num = 3
var divs = document.querySelectorAll('#item')
var items = document.querySelectorAll('#right');
items.forEach((value, index, array) => {
    value.addEventListener("click", () => {
        var par = value.parentElement
        par.remove()
        num--
        var u_left = document.querySelectorAll('#left');
        for (var i = 1; i < u_left.length; i++) {
            u_left[i].innerHTML = i
        }
    })
})
var b = document.getElementById('bu')
b.addEventListener("click", () => {
    var main = document.getElementById('top')
    var a = divs[0].cloneNode(true)
    var achild = a.childNodes.item(1)
    achild.innerHTML = ++num
    var adelect = a.childNodes.item(3)
    adelect.addEventListener("click", () => {
        var par = adelect.parentElement
        par.remove()
        num--
        var u_left = document.querySelectorAll('#left');
        for (var i = 1; i < u_left.length; i++) {
            u_left[i].innerHTML = i
        }
    })
    main.appendChild(a)
})