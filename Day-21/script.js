"use strict";

import { moduleMessage } from "./module.js";

window.handleJSON = function () {
    const user = {
        name: "Anu",
        age: 21,
        skills: ["JS", "React", "DSA"]
    };

    const jsonString = JSON.stringify(user);
    const parsedObject = JSON.parse(jsonString);

    document.getElementById("jsonOutput").innerText =
        "Stringified:\n" + jsonString +
        "\n\nParsed:\n" + parsedObject.name + ", " + parsedObject.skills[0];
};

window.runThisExamples = function () {
    const person = {
        name: "Anu",
        greet: function () {
            return "Hello " + this.name;
        }
    };

    function introduce(city) {
        return this.name + " from " + city;
    }

    const callExample = introduce.call({ name: "Anu" }, "Hyderabad");
    const applyExample = introduce.apply({ name: "Anu" }, ["Delhi"]);
    const bindExample = introduce.bind({ name: "Anu" });
    const boundResult = bindExample("Mumbai");

    document.getElementById("thisOutput").innerText =
        person.greet() +
        "\nCall: " + callExample +
        "\nApply: " + applyExample +
        "\nBind: " + boundResult;
};

window.saveLocal = function () {
    localStorage.setItem("username", "Anu");
};

window.getLocal = function () {
    document.getElementById("localOutput").innerText =
        localStorage.getItem("username");
};

window.saveSession = function () {
    sessionStorage.setItem("sessionUser", "AnuSession");
};

window.getSession = function () {
    document.getElementById("sessionOutput").innerText =
        sessionStorage.getItem("sessionUser");
};

window.setCookieData = function () {
    document.cookie = "user=AnuCookie; max-age=3600";
};

window.getCookieData = function () {
    document.getElementById("cookieOutput").innerText = document.cookie;
};

window.runModule = function () {
    document.getElementById("moduleOutput").innerText = moduleMessage();
};