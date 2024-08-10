
const form = document.getElementById("form")
const submition = document.getElementById("submition")
const fname = document.getElementById("fname")
const lname = document.getElementById("lname")
const stid = document.getElementById("stuid")
const info_bt = document.getElementById("info")
const popup = document.getElementById("pop-up")
const password = document.getElementById("password")
const show_bt = document.getElementById("show")
const courses = document.getElementById("courses")
const studentIdReg = /^A0[0-9]{7}$/i
let studentid = RegExp(studentIdReg)
popup.style.display = "none"
show.innerHTML = `Show`

///////////form/////////////
form.addEventListener("submit", function(event) {
    let errordetection = false

    submition.innerHTML = ""

    if (fname.value.length === 0) {
        submition.style.display = "block"
        submition.innerHTML += `<p class="error"> Firstname field shouldn't be empty.</p>`

        errordetection = true
    }

    if (lname.value.length === 0) {
        submition.innerHTML += `<p class="error"> Lastname field shouldn't be empty.</p>`

        errordetection = true
    }

    if (stid.value.length === 0) {
        submition.innerHTML += `<p class="error">Student number field shouldn't be empty.</p>`

        errordetection = true
    }

    else if (stid.value.length !== 0) {
        if (! studentid.test(stid.value)) {
            submition.innerHTML += `<p class="error">Please provide a BCIT student number that is valid(A0nnnnnnn).</p>`
    
            errordetection = true
        }
    }

    if (password.value.length === 0) {
        submition.innerHTML += `<p class="error"> You need to insert Password .</p>`

        errordetection = true
    }

    if (courses.value === "defult") {
        submition.innerHTML += `<p class="error">You need to choose Course.</p>`

        errordetection = true
    }

    if (errordetection == true) {
        event.preventDefault()
    }
})

///////showpass///////////////////
let showpass = true

show_bt.addEventListener("click", function(evaluate) {
    evaluate.preventDefault()
    if (password.type === "password") {
        show_bt.innerHTML = `Hide`
        password.type = "text"

        showpass = false
    }

    else {
        show_bt.innerHTML = `Show`
        password.type = "password"

        showpass = true
    }

    
})

////////////information///////////////

info_bt.addEventListener("mouseout", function() {
    popup.style.display = "none"
})

info_bt.addEventListener("mouseover", function() {
    popup.style.display = "inline-block"
})





