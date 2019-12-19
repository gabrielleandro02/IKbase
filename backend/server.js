const express = require("express")
const path=require("path")
const db=require("./banco.js")

const port = 3000
const app = express()

const publicDirectory = path.join(__dirname, '../frontend/public')
const viewsPath= path.join(__dirname, '../frontend/views')
app.use(express.static(publicDirectory))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE")
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type")
    res.setHeader("Access-Control-Allow-Credentials", true);
    next()
})



app.get("", (req, res) => {
    res.sendFile(viewsPath+'/inicio.html')
})

app.get("/sobre", (req, res) => {
    res.sendFile(viewsPath+'/sobre.html')
})

app.get("/ajuda", (req, res) => {
    res.sendFile(viewsPath+'/ajuda.html')
})

app.get("/login", (req, res) => {
    res.sendFile(viewsPath+'/login.html')
})

app.get("/cadastro", (req, res) => {
    res.sendFile(viewsPath+'/cadastro.html')
})

app.post("/usuario", async (req, res) => {
    let usuario=await getUsuarioById(req.body[0].id)
    let logado=true
    res.send(usuario, logado) //enviar usuario completo
    res.sendFile(viewsPath+'/usuario.html')
})

app.get("/topico/", (req, res)=>{
    res.sendFile(viewsPath+'/topico.html')
})






app.get("/dbtopicos", async (req, res)=>{
    let result= await db.getTopicos()
    res.send(result)
    res.end()
})

app.get("/dbtags", async (req, res)=>{
    let result= await db.getTags()
    res.send(result)
    res.end()
})

app.get("/dbcomentarios/:id", async (req,res)=>{
    let result= await db.getComentarioByTopico(req.params.id)
    res.send(result)
    res.end()
})

app.get("/dbcompetencias", async (req, res)=>{
    let result= await db.getCompetencias()
    res.send(result)
    res.end()
})

app.post("/dbusuarioByLogin", async(req, res)=>{
    const {email, senha} = req.body;
    let result=await db.selectValidacao(email, senha)
    res.send(result)
    res.end()
})

app.post("/dbusuarioById", async(req, res)=>{
    let result=await db.getUsuarioById(req.body.id)
    res.send(result)
    res.end()
})

app.post("/dbcadastroUsuario", async(req, res)=>{
    user=req.body
    await db.insertUsuario(user.email, user.senha, user.nome, user.dataNascimento)
})

app.get("/dbgetUsuarios", async(req, res)=>{
    let result= await db.getUsuarios()
    res.send(result)
    res.end()
})

app.get("/dbtopicoById/:id", async(req, res)=>{
    let result= await db.getTopicoById(req.params.id)
    res.send(result)
    res.end()
})

app.get("/*", (req, res)=>{
    res.sendFile(viewsPath+'/ajuda.html')
})

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))
