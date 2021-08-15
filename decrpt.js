var rsa = require ("node-rsa");
var fs = require("fs");


var publickey = new rsa();
var privatekey = new rsa()

var public = fs.readFileSync("./keys/public.pem","utf8");
var private = fs.readFileSync("./keys/private.pem","utf8");

publickey.importKey(public);
privatekey.importKey(private);

function CreateLiscence(passcode){
    const firstsalt = "wewillmakeitbetterthanthissimplecryptnexttime"
    const secondsalt = "thisismyfirstencryptionanddecryptionbyuseofrsa"

    const encrypted = privatekey.encryptPrivate(
        passcode ,
        "base64"
    );
    return encrypted;
}
function decryption(license){
    const decrypted = publickey.decryptPublic(license,"utf8")
    return decrypted
}

function checkvalidity(license){
    const decrypted = publickey.decryptPublic(license,"utf8")
    console.log("encrypted string : " ,license);
    console.log("after decryption : ",decrypted);


    if ("wewillmakeitbetterthanthissimplecryptnexttimehemaplaypopo@gmail.comthisismyfirstencryptionanddecryptionbyuseofrsa" == decrypted){
        return true;
    }else{
        return false;
    }
}
console.log(checkvalidity("aC7SBZ8nj71pZJvPuAcbVGRpUYLr5ZZkKUm1jJwwrJ5r8gZQKT3SUIaXguZiYYgmGQ11BccEZSdN/ngHG4Z82fEBFSQ044ezTDv+EbLBBVpWuO+7EeuOciKGoO52HZOhlLoBx4y+cEwAbZpU2s57F54pZWRvPDM8xAhbRf8aQMHjqm9Onil0Taop2rXcJ/j1tsiKK6+w99/T3nvH3ALLCMWYcbZAZuEwaTXTju9yrM1WHE+J1ruL/d3hKtfK4CfLaOLnGAfUAddG/i60/nwk5Bbm/VnQfa38HGdfPTEuL8zHPxGpQdQ3fxOzA6GvhKhcnYq6NyziladgCaua0/Y+Rw=="))

module.exports = {CreateLiscence,decryption};