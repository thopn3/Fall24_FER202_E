// Khái báo thư viện http (Http core) để tạo ra 1 web server
const http = require("http");

// Khai báo các thông số cho web server
const hostname = "localhost";
const port = 8888;

// Tạo 1 web server
const server = http.createServer((req, res) => {
    // Thiết lập thông tin cho HttpResponse
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Hello, FPT University!</h1>");
});

// Lắng nghe các request từ Client gửi tới NodeJS Web server
server.listen(port, hostname, () => {
    console.log("Server running at: http://"+ hostname + ":"+ port);
});