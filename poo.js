function CreateStudent(name,password) {
    return {
        name: name,
        password: password,
        email: name + "@gmail.com",
        approvedCourses: [],
        newCourse: function newCourse(course) {
            this.approvedCourses.push(course)
        }
    }
}
function DarValorInput(id) {
    return document.getElementById(id).value;
}
let cursitos
let seccion = document.querySelector(".register-zone")
let username = undefined
let password = undefined
let sendbtn = document.getElementById("send")
let user = undefined;
function comenzarApp() {
    username = DarValorInput("Nombre")
    password = DarValorInput("Contraseña")
    user = CreateStudent(username,password)
    Object.seal(user)
    if (username.length < 4){
        document.getElementById("Mensajemalo").innerText = "Tu nombre debe tener al menos 4 caracteres"
    } else if (password.length < 8){
        document.getElementById("Mensajemalo").innerText = "Tu contraseña debe tener al menos 8 caracteres"
    } else {
        document.getElementById("Mensajemalo").innerText = ""
        seccion.classList.add("invisible")
        document.getElementById("cursos").classList.add("hacking-courses")
        document.getElementById("cursos").classList.remove("invisible")
    }
}
sendbtn.addEventListener("click", comenzarApp)