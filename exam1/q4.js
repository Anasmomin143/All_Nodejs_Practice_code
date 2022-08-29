//Example of Conditional statements

// example of if else statments.
let a = "Anas";
if (a == "Anas") {
    console.log(`Welcome ${a}`)
}
else {
    console.log("Invalid User")
}

// example of if else if statments.
let i = 20;
if (i <= 10) {
    console.log("Grade C")
}
else if (i <= 15) {
    console.log("Grade B")
}
else if (i <= 18) {
    console.log("Grade A")
}
else if (i = 20) {
    console.log("Grade A+")
}

// Example of nested if
for (let j = 1; j <= 50; j++) {
    if (j >= 20 & j <= 30) {
        if (j % 2 == 0) {
            console.log(`${j} is Even`)
        }
    }
}