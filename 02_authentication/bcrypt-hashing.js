import bcrypt from "bcrypt";
import express from "express";
import validator from "validator";

const PORT = 2371;
const app = express();
const PASSWORD = "$2b$08$njttrkzVsHUo/Uu4uRwFVeFvTq6g3S5Oq.ZfdHiVdncWf8cqmp3Qq"//"JESUST4AIME@";

app.post("/login", (req, res) => {
    let password = validator.escape(req.query.password);

    bcrypt.compare(password, PASSWORD, (err, result) => {
        if (err) console.error(err);
        res.json((result) ? { "Message": "You have logged on Succesfully" } : { "Message": "Identifier or Password Invalid" })
    })
})


app.listen(PORT, "0.0.0.0", () => { console.log(`SERVER LISTENING ON ${PORT}`) });