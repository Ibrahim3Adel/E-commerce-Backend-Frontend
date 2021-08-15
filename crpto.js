var rsa = require("node-rsa");
var fs = require = require("fs");

function Generatepair () {
    var key = new rsa().generateKeyPair();
    var publickey = key.exportKey("public");
    var privatekey = key.exportKey("private");

    fs.openSync("./keys/public.pem","w");
    fs.writeFileSync("./keys/public.pem",publickey,"utf8");

    fs.openSync("./keys/private.pem","w");
    fs.writeFileSync("./keys/private.pem",privatekey,"utf8");
}

Generatepair();