const numbers = document.querySelectorAll(".numbers");
const clear = document.getElementById("clear");
const parantheses = document.getElementById("parantheses");
const operation = document.querySelectorAll(".operation");
const button = document.querySelectorAll("button");

//NUMBERS

numbers.forEach((numbs) => {
	numbs.addEventListener("click", () => {
		switch (numbs) {
			case numbers[0]:
				console.log(7);
				break;
			case numbers[1]:
				console.log(8);
				break;
			case numbers[2]:
				console.log(9);
				break;
			case numbers[3]:
				console.log("X");
				break;
			case numbers[4]:
				console.log(4);
				break;
			case numbers[5]:
				console.log(5);
				break;
			case numbers[6]:
				console.log(6);
				break;
			case numbers[7]:
				console.log(1);
				break;
			case numbers[8]:
				console.log(2);
				break;
			case numbers[9]:
				console.log(3);
				break;
			case numbers[10]:
				console.log(0);
				break;
			case numbers[11]:
				console.log(".");
				break;
		}
	});
});

//OPERATORS

operation.forEach((operators) => {
	operators.addEventListener("click", () => {
		switch (operators) {
			case operation[0]:
				console.log("%");
				break;
			case operation[1]:
				console.log("/");
				break;
			case operation[2]:
				console.log("-");
				break;
			case operation[3]:
				console.log("+");
				return operators;

				break;
			case operation[4]:
				console.log("=");
		}
	});
});
console.log(operation);
