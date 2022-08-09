//This file must be the first included file in frontend

servers = {
    submission: {
        ip: "192.168.0.100",
        port: 8080,
    },
    query: {
        ip: "192.168.0.100",
        port: 8081
    }
}
servers.submission.url = "http://" + servers.submission.ip + ":" + servers.submission.port
servers.query.url = "http://" + servers.query.ip + ":" + servers.query.port
try {
    module.exports = servers;
} catch (e) {
    //do nothing
    //its for handling front end error
}
