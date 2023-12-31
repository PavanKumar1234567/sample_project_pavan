import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app=express()

app.use(cors())
// i am doing configuration setting
app.use( express.json( {limit : "16kb"}))   // it says i am accepting json from request 
app.use(express.urlencoded({limit:"16kb",extended:true}))   // it is saying for how use accept data from url
app.use(express.static("public"))
app.use(cookieParser())
export{app}