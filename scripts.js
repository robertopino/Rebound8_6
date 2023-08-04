import cryptoRandomString from "crypto-random-string";

// type: 'base64'
console.log(cryptoRandomString({ length: 16, type: "base64" }), " Length: 16, Type: Base64");
// type: ‘base64url’
console.log(cryptoRandomString({ length: 16, type: "url-safe" }), " Length: 16, Type: BaseURL64");
// type: ‘hex’
console.log(cryptoRandomString({ length: 16, type: "hex" }), " Length: 16, Type: Hex");
// type: ‘alphanumeric’
console.log(cryptoRandomString({ length: 16, type: "alphanumeric" }), " Length: 16, Type: Alphanumeric");
