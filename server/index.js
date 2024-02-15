const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

// Add User
app.post("/users", async(req, res) => {
    try {
        const {userid, username} = req.body;
        const newUser = await pool.query("INSERT INTO users (userid, username)" +
                                            " VALUES($1, $2) RETURNING *",
         [userid, username]);

         res.json(newUser.rows[0]);
    } catch (error) {
        res.json({error: "Duplicate UserID"});
        console.log(error.message);
    }
})

app.listen(5000, () => {
    console.log("Server has started on port 5000");
});