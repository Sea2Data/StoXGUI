'use strict';
const fs = require('fs');
let userHome = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE; // os independent home direcory
let stoxpropertiesfile = userHome + "/" + "STOX_PROPERTIES.json"
let stoxproperties = {};
if (fs.existsSync(stoxpropertiesfile)) {
    let rawdata = fs.readFileSync(stoxpropertiesfile);
    stoxproperties = JSON.parse(rawdata);
} else {
    let rPath = userHome + "/Documents/R/R-3.5.2/bin/x64/R";
    let projectroot = userHome + "/workspace/stox/project";
    stoxproperties = {
        rpath: rPath,
        projectroot: projectroot
    };
    // The user will be required to manage the stox properties file at the standalone server
    fs.writeFileSync(stoxpropertiesfile, JSON.stringify(stoxproperties));
}

console.log(stoxproperties.rpath)


console.log("hello node")
console.log(userHome)
console.log(process.env.HOME)
console.log(process.env.HOMEPATH)
console.log(process.env.USERPROFILE)
//console.log(process.env)
var child_process = require('child_process');
var r_comm = 'R';
// spawn RServe as a async child process
var rspawn = child_process.exec(r_comm + " -e \"library(Rserve);Rserve(port=6311)\"", (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
});

var r = require('rserve-client');
r.connect('localhost', 6311, function (err, client) {
    client.evaluate('a<-2.7+2', function (err, ans) {
        console.log(ans);
        client.end();
        console.log("end server:");
    });
});


