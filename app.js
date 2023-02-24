var Emitter = require("events");

var emtr = new Emitter();

let config = require("./config")

emtr.on("greet", () => {
    console.log("Somwhere, someone said hello.");
});

emtr.on(config.events.GREET, () => {
    console.log("A greeting ocurred!");
});

console.log("Hello!");
emtr.emit("greet");

emtr.on(config.events.JUMP, () => {
    console.log("someone jumped!");
});

console.log(emtr)
emtr.emit("jump");