//https://edabit.com/challenge/rvsvGvqZ3BzNieKqA

function detectWord(str) {
	const regexp=/[a-z]/g;
	return str.match(regexp).join("");
}