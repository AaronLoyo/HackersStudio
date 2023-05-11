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
let curso1 = document.getElementById("curso1")
let curso2 = document.getElementById("curso2")
let curso3 = document.getElementById("curso3")
let curso4 = document.getElementById("curso4")
let cursitos = [document.getElementById("curso1"),document.getElementById("curso2"),document.getElementById("curso3"),document.getElementById("curso4"),]
let seccion = document.querySelector(".register-zone")
let username = undefined
let password = undefined
let sendbtn = document.getElementById("send")
let user = undefined;
let approvedCoursesSeccion = document.getElementById("aprovarcursoseccion")
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
function rederizarcurso1() {
    user.newCourse("Curso de hackeo en cafeteria")
    document.getElementById("curso1terminado").innerHTML = "Terminado"
}
function rederizarcurso2() {
    user.newCourse("Curso de hackeo de robots")
    document.getElementById("curso2terminado").innerHTML = "Terminado"
}
function rederizarcurso3() {
    user.newCourse("Curso de virus avanzado")
    document.getElementById("curso3terminado").innerHTML = "Terminado"
}
function rederizarcurso4() {
    user.newCourse("curso de virus basico")
    document.getElementById("curso4terminado").innerHTML = "Terminado"
}
sendbtn.addEventListener("click", comenzarApp)
curso1.addEventListener("click",rederizarcurso1)
curso2.addEventListener("click",rederizarcurso2)
curso3.addEventListener("click",rederizarcurso3)
curso4.addEventListener("click",rederizarcurso4)