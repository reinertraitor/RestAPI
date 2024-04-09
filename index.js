const express = require("express");
const app = express();
const users = require("./MOCK_DATA.json");

const PORT = 5000;

app.get('/users',(req,res) => {
    const html=`
    <ul>
    ${users.map(user => `<li>${user.first_name}</li>`).join("")}
    </ul>`
    return res.send(html);
});

//ROUTES

// app.get('/api/users',(req,res) => {
//     return res.json(users);
// });

// app.get("/api/users/:id", (req , res) => {
//     const id = Number(req.params.id);
//     const user = users.find(user => user.id === id);
//     return res.json(user);
// });


//Middleware -Plugin

app.use((req,res,next)=>{
next();
});


app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .patch((req, res) => {
    // Edit user with ID
    const id = Number(req.params.id);
    return res.send({ status: "Pending" });
  })
  .delete((req, res) => {
    // Delete user with ID
    const id = Number(req.params.id);
    return res.send({ status: "Pending" });
  });

app.listen(PORT, () => {
  console.log(`server started at Port:${PORT}`);
});
