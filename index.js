const express = require("express");
const app = express();
const petRotas = require ("./Routes/pet");

app.use(petRotas);

//Subindo o servidor
app.listen(3000,()=> {
    console.log("Carnaval");
});