const os = require("os");
console.log("Version")
console.log("Free Memory: " + os.freemem() / Math.pow(10,9) + " " +"GB");
console.log("Total Memory: " + os.totalmem()/ Math.pow(1024,3) +" "+ "GB");
console.log("Platform: " + os.platform());
console.log("Hostname: " + os.hostname());
console.log("Uptime: " + os.uptime() + " " + "seconds");
console.log("User Info: " + os.userInfo());
console.log("CPU Info: " + os.cpus());
console.log("Network Info: " + os.networkInterfaces());
console.log("OS Info: " + os.type());
console.log("OS Release: " + os.release());
console.log("OS CPU Arch: " + os.arch());
console.log("Os Version: " + os.version());



        