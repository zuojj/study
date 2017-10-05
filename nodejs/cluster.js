
const cluster = require('cluster');
const http = require('http');
const cupsNum = require('os').cpus().length;

if (cluster.isMaster) {
    console.log(`Master ${process.id} is running`);

    // fork workers
    for (let i = 0; i < cupsNum; i++) {
        let worker = cluster.fork();
        // console.log(`Cluster: worker ${worker.id} started`);
    }​

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });
} else {
    // Workers can share any TCP connection
    // In this case it is an HTTP server
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end(cluster.isWorker ? `Worker ${cluster.worker.id} received request.` : 'master');
    }).listen(8000);

    console.log(`Worker ${process.pid} started`);
}