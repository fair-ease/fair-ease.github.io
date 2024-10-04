function show(id) {
    const obj = document.getElementById(id)
    obj.className = obj.className.replace('hide', '').replace(/ +/, ' ')
    document.getElementById(id + '-show').className = 'hide'
    document.getElementById(id + '-hide').className = ''
}

function hide(id) {
    const obj = document.getElementById(id)
    obj.className = obj.className + ' hide'
    document.getElementById(id + '-show').className = ''
    document.getElementById(id + '-hide').className = 'hide'
}
