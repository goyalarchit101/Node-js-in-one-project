const http = require("http");
const fs = require("fs");

const PORT = 4000;
const hostname = "localhost";
const home = fs.readFileSync("./index.html", "utf-8")

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end(home);
    }
    else if (req.url === "/about")
        res.end("<h1>About Page</h1>");
    else if (req.url === "/service")
        res.end("<h1>Service Page</h1>");
    else
        res.end("<h1>page not found</h1>");
})

server.listen(PORT, hostname, () => {
    console.log(`server is working on http://${hostname}:${PORT}`);
}) 

