const express=require("express")
const dotenv=require("dotenv")
const mongoose=require("mongoose")
const app=express()
dotenv.config()
app.use(express.json())

const CategorieRouter=require("./routes/categorie.route.js")
//connexion a la base de données
mongoose.connect(process.env.databasecloud)
.then(() => {console.log("DataBase Successfully Connected");})
.catch(err => { console.log("Unable to connect to database", err);
process.exit(); });


app.use("/api/categories",CategorieRouter)

app.listen(process.env.PORT, () => {
console.log(`Server is listening on port ${process.env.PORT}`); });
module.exports = app;
