var a = "ss";
a === "ss";
a;
console.log("web3.0C");
var inventor = "Hedy Lamarr";
inventor.toUpperCase(); // Ok: string
//inventor.toFixed();
var scientist = Math.random() > 0.5
    ? 888
    : "gg";
if (scientist === 888) {
    scientist.toFixed(); // Ok
    console.log("true", scientist);
}
else {
    scientist;
    console.log("false", scientist);
}
// Type of scientist: number | string
//scientist.toUpperCase();
console.log("?", scientist);
