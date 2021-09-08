const express = require('express')
const server = express()

let proffys = [{
    name: "Lucas Naliato",
    avatar: "https://avatars.githubusercontent.com/u/68452014?v=4",
    whatsapp: "19999065151",
    bio: "Programador Fullstack buscando cada vez mais conhecimento 👾",
    subject: "Programação",
    cost: "20,00",
    weekday: [0,1],
    time_from: [720],
    time_to: [1220]
}]

let subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Quimíca"
]

let weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
]

function getSubject(subjectNumber) {
    const position = +subjectNumber - 1;
    return subjects[position];
}

function pageLanding(req, res) {
    return res.render("index.html");
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays });
}

function pageGiveClasses(req, res) {
    const data = req.query;

    const isNotEmpty = Object.keys(data).length > 0

    if (isNotEmpty) {

        data.subject = getSubject(data.subject);

        proffys.push(data);

        return res.redirect("/study");
    }
    
    return res.render("give-classes.html", { subjects, weekdays });
}

const nunjucks = require('nunjucks')

nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

server
.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen('8080')