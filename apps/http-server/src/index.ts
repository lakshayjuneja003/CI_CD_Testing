
import express from 'express';
import {client} from "@repo/db/client";
const app = express();
const PORT = 3001;

app.use(express.json());

app.post("/", async (req, res) => {
  const {username , password} = req?.body;
  if(!username || !password){
    return res.status(400).send("Username and password are required");
  }
  const user = await client.user.create({
    data:{
        username, password
    }
  })
  if(!user){
    return res.status(500).send("Error creating user");
  }
  return res.status(201).json({
    "message": "User created successfully",
    user
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});