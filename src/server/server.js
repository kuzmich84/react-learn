import server from "express";
import ReactDOM from "react-dom/server";
import {Header} from "../shared/Header";
import indexTemplate from "./indexTemplate";

const app = server();

app.use('/static', server.static('./dist/client'))

app.get('/', (req, res) => {
    res.send(indexTemplate(ReactDOM.renderToString(Header())))
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`))