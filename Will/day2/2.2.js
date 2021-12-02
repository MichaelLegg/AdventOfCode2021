// ugly brute force
let li = document.querySelector("pre").textContent.split(/\r?\n/);
let depth = 0;
let dist = 0;
let aim = 0;
li.forEach((e) => {
	const kvp = e.split(" ").map((v, i) => (i === 1 ? parseInt(v) : v));
	if (kvp[0] === "forward") {
		dist += kvp[1];
		depth += kvp[1] * aim;
	} else if (kvp[0] === "up") {
		aim -= kvp[1];
	} else if (kvp[0] === "down") {
		aim += kvp[1];
	}
});
console.log(depth * dist);
