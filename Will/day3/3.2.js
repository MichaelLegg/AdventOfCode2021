let li = document.querySelector("pre").textContent.split(/\r?\n/);
let oxy = "";
let co2 = "";
let filteredListO = li;
let filteredListC = li;

for (let i = 0; i < li[0].length; i++) {
	const newFilterO = filteredListO.filter((e) => e[i] == 1);
	const newFilterC = filteredListC.filter((e) => e[i] == 1);
	filteredListO =
		newFilterO.length >= filteredListO.length / 2
			? newFilterO
			: filteredListO.filter((e) => e[i] == 0);
	filteredListC =
		newFilterC.length >= filteredListC.length / 2
			? filteredListC.filter((e) => e[i] == 0)
			: newFilterC;
	if (filteredListO.length === 1) oxy = filteredListO[0];
	if (filteredListC.length === 1) co2 = filteredListC[0];
}

console.log(parseInt(oxy, 2) * parseInt(co2, 2));
