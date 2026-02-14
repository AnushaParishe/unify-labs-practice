function startSystem() {

    let masterPin = "9999";
    let attempts = 3;
    let access = false;

    while (attempts > 0) {
        let pin = prompt("ENTER MASTER PIN:");
        if (pin === masterPin) {
            access = true;
            break;
        } else {
            attempts--;
            alert("WRONG PIN. Attempts Left: " + attempts);
        }
    }

    if (!access) {
        alert("SYSTEM SELF DESTRUCT");
        return;
    }

    let banner = "";
    banner += "====================<br>";
    banner += "WELCOME TO VIRTUAL CORE v1.0<br>";
    banner += "====================<br>";

    document.getElementById("screen").innerHTML = banner;

    let balance = 1000;
    let UNIT_PRICE = 50;
    let secretWord = "core";

    while (true) {

        let command = prompt("[V-CORE]> Type command: bank, shop, vault, exit");

        if (command === null) continue;

        switch (command.toLowerCase()) {

            case "bank":

                while (true) {

                    let bankCmd = prompt("BANK: deposit, withdraw, balance, back");

                    if (bankCmd === "deposit") {
                        let amt = parseFloat(prompt("Enter deposit amount:"));
                        if (!isNaN(amt) && amt > 0) {
                            balance += amt;
                            alert("Deposited. New Balance: " + balance);
                        } else {
                            alert("Invalid Amount");
                        }
                    }

                    else if (bankCmd === "withdraw") {
                        let amt = parseFloat(prompt("Enter withdraw amount:"));
                        if (amt > balance) {
                            alert("INSUFFICIENT FUNDS");
                        } else if (!isNaN(amt) && amt > 0) {
                            balance -= amt;
                            alert("Withdrawn. New Balance: " + balance);
                        } else {
                            alert("Invalid Amount");
                        }
                    }

                    else if (bankCmd === "balance") {
                        alert("Current Balance: " + balance);
                    }

                    else if (bankCmd === "back") {
                        break;
                    }

                    else {
                        alert("Invalid Bank Command");
                    }
                }

                break;

            case "shop":

                let qty = parseInt(prompt("Enter quantity:"));

                if (isNaN(qty) || qty <= 0) {
                    alert("Invalid Quantity");
                    break;
                }

                let discount = 0;

                if (qty <= 5) {
                    discount = 0;
                } else if (qty <= 10) {
                    discount = 0.1;
                } else {
                    discount = 0.2;
                }

                let total = qty * UNIT_PRICE;
                total = total - (total * discount);

                if (total > balance) {
                    alert("Not enough balance");
                } else {
                    balance -= total;
                    alert("Purchased. Total: " + total + " Remaining Balance: " + balance);
                }

                break;

            case "vault":

                alert("Hint: It is the name of this system");

                let guess = prompt("Enter secret word:");

                if (guess && guess.toLowerCase() === secretWord) {
                    alert("SECRET UNLOCKED: https://virtualcore.secret");
                } else {
                    alert("Wrong Secret. Returning to menu.");
                }

                break;

            case "exit":
                alert("Shutting Down Virtual Core...");
                return;

            default:
                alert("Unknown Command");
        }
    }
}