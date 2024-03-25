// sending response back to webpage or browser

const http = require("http");

const server = http.createServer((req,res) => {
    console.log(req);


res.write("<p>Hello Iscorates 123</p>");
res.end();
});

server.listen(3000,'localhost',() => {
    console.log("listening on port 3000");
});
