let li = document.querySelector("pre").textContent.split(/\r?\n/);
let depth = 0;
let dist = 0;
li.forEach((e) => {
	const kvp = e.split(" ");
	if (kvp[0] === "forward") dist += parseInt(kvp[1]);
	else if (kvp[0] === "up") depth -= parseInt(kvp[1]);
	else if (kvp[0] === "down") depth += parseInt(kvp[1]);
});
console.log(depth * dist);
