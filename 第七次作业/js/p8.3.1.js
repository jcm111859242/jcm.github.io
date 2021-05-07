var num = 3
$('#bu').click(() => {
    var cl = $('#item').clone(true)
    var clch = cl.find('#left')
    clch.text(++num)
    $('#top').append(cl)
})

$('body').on('click', '.right', (e) => {
    e.currentTarget.parentNode.remove()
    num--;
    $('.left').each((index, ele) => {
        ele.innerHTML = index
    })
})
