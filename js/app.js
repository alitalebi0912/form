let qstion = document.getElementById("qstion")
let qstio2 = document.getElementById("qstion2")
let qstion3 = document.getElementById("qstion3")
let qstion4 = document.getElementById("qstion4")
let qstion5 = document.getElementById("qstion5")
let qstion6 = document.getElementById("qstion6")
let qstion7 = document.getElementById("qstion7")
let qstio8 = document.getElementById("qstion8")
let qstion9 = document.getElementById("qstion9")
let qstion10 = document.getElementById("qstion10")
let qstion11 = document.getElementById("qstion11")
let btn = document.getElementById("btn")
let userform = document.getElementById("userform")

userform.addEventListener("submit", function (e) {

    let reqest = {
        name:e.target.qstion.value,
        callnumber: e.target.qstion2.value,
        emil: e.target.qstion3.value,
        mahel: e.target.qstion4.value,
        tahsil: e.target.qstion5.value,
        daneshgah: e.target.qstion6.value,
        sheghel: e.target.qstion7.value,
        sherkat: e.target.qstion8.value,
        zaman: e.target.qstion9.value,
        zaban: e.target.qstion10.value,
        taslat: e.target.qstion11.value,
    }
    console.log(reqest);
    

alert( "hello" + e.target.qstion.value.slice(1,4));
console.log(e.target.qstion.value.trim());

    e.preventDefault()

})



