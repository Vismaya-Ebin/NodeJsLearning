const fs = require("fs");

const quote = "No beauty Shines better than that of a good heart";
const quote2 = "😊😊😊😊Worry Less, Live more😊😊😊😊";
const quote3 =
  "Node    is    a    platform    for    server-side    JavaScript    applications.";
/**fILE TYPE CAN BE ANY */

/**WRITE FILE */
fs.writeFile("./file.html", quote, (err) => {
  console.log("File Written completed");
});

fs.writeFile("./file.pdf", quote, (err) => {
  console.log("File Written completed");
});

console.log("Process argv", process.argv);
const [, , a] = process.argv;
console.log("a", a);
for (let i = 1; i <= 100; i++) {
  fs.writeFile(`./backup/Ebin-${i}.pdf`, quote3, (err) => {
    console.log("File Written completed", `Ebin -Vismaya-${i}.pdf`);
  });
}
console.log("Printing 10 times", process.argv);


/**READ FILE */


fs.readFile("./file.html", (err, data) => {
    console.log("File Read completed.....", data);
})
fs.readFile("./filesdfdfd.html", "utf-8", (err, data) => {
    if(err) {
        console.log("Error🔐", err);
        return;
    }
    console.log("File Read completed", data);
})

fs.unlink("./file.html",(err) =>{
    console.log("File Deleted");

})

fs.unlink("./backup", (err, files) => {
    console.log("Files", files);
})