const http = require("http");

const PORT = 3000;

const server = http.createServer();

server.on("request", (req, res) => {
  if (req.url === "/friends") {
    // res.writeHead(200, {
    //   "Content-type": "application/json",
    // });
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify({
      id: 1,
      name: "Michael Jackson"
    }));
  } else if (req.url === "/messages") {
    res.write("<html>");
    res.write("<body>");
    res.write("<ul>");
    res.write("<li>Yow</li>");
    res.write("<li>NewYow</li>");
    res.write("<ul>");
    res.write("</ul>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }

})

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});