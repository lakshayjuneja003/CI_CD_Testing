

import {WebSocketServer} from "ws"
import { client } from "@repo/db/client"
const wss = new WebSocketServer({port: 8080})

wss.on("connection",  async (ws) => {
    try {
        const user = await client.user.create({
            data:{
                username:Math.random().toString(12),
                password:Math.random().toString(12)
            }
        })
        console.log("New user created: ", user);
    } catch (error) {
        console.log("something wrong happened " , error);
    }
    ws.send("Welcome to the WebSocket server!");

    ws.on("message", (message) => {
        console.log(`Received message: ${message}`);
        ws.send(`You said: ${message}`);
    });
});