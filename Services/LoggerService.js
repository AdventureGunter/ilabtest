var fs = useSystem('fs');
var Service = useModule('Service');
var ServiceProxy = useModule('ServiceProxy');
var app = require('http').createServer(handler);

var io = require('socket.io')(app);
app.listen(8080);

function handler (req, res) {
    fs.readFile(__dirname + '/index.html',
        function (err, data) {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading index.html');
            }

            res.writeHead(200);
            res.end(data);
        });
}

io.on('connection', function (socket) {
    //socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
});

LoggerService = function(port){
    
    return Service.apply(this, arguments);
};

Inherit(LoggerService, Service, {

});

module.exports = LoggerService;