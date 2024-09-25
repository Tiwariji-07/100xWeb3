const crypto = require("crypto");

const input = "vivek";

// //Assignment 1
// for (let i = 0; i < 10000000; i++) {
//   const hash = crypto.createHash("sha256").update(i.toString()).digest("hex");
//   if (hash.slice(0, 5) === "00000") {
//     console.log("number: " + i + ",hash: " + hash);
//     break;
//   }
// }

// //Assignment 2
// for (let i = 0; i < 10000000; i++) {
//   const hash = crypto
//     .createHash("sha256")
//     .update("100xdevs" + i.toString())
//     .digest("hex");
//   if (hash.slice(0, 5) === "00000") {
//     console.log("number: " + i + ",hash: " + hash);
//     break;
//   }
// }

//Assignment 3
for (let i = 0; i < 10000000; i++) {
  const hash = crypto
    .createHash("sha256")
    .update(
      `harkirat => Raman | Rs 100
Ram => Ankit | Rs 10` + i.toString()
    )
    .digest("hex");
  if (hash.slice(0, 5) === "00000") {
    console.log("number: " + i + ",hash: " + hash);
    break;
  }
}
