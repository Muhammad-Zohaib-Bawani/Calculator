function enter(e){
    document.getElementById('inp').value += e
}
function eq(){
   var a = document.getElementById("inp")
   a.value = eval(a.value)
}
function clr(){
    document.getElementById('inp').value = ''
}
function abc() {
    var a = document.getElementById("inp")
    a.value = a.value.slice (0,-1)

}