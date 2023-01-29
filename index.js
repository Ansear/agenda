import express from "express";
import participant from "./src/routes/participant.routes.js"
import event from "./src/routes/events.routes.js"
import festivalPaticipant  from "./src/routes/participan_event.routes.js";
import bodyParser from "body-parser";

const app = express();

app.listen(4001);
app.use(bodyParser.json());
app.use(participant);
app.use(event)
app.use(festivalPaticipant)
