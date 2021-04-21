import express, { response } from "express";

const app = express();


/* 
GET = Buscas
POST = Criação
PUT = Alteração
DELETE = Deleção
PATCH = Aletrar uma informação específica
*/

app.get("/", (request, response) => {
    return response.json({
        message: "Ola mundo"
    })
})

app.post("/users", (request, response) => {
    return response.json({
        message: "Usuário salvo!"
    })
})

app.listen(3333, () => console.log("Server is running on port 3333..."))
