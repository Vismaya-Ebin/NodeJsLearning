const fs = require("fs");

fs.unlink("./backup/Ebin-1.pdf", (err) => {
  console.log(`File Deleted`, err);
});
fs.readdir("./backup", (err, files) => {
  for (let i = 1; i <= files.length; i++)
    fs.unlink(`./backup/${files[i]}`, (err) => {
      console.log(`File Deleted`, err);
    });
  console.log("File Deleted Final", files.length);
});
