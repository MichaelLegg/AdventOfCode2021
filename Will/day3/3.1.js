let li = document.querySelector("pre").textContent.split(/\r?\n/);
let gamma = [];
let epsilon = [];
for (let i = 0; i < li[0].length; i++) {
	const filter = li.filter((e) => e[i] == 1);
	gamma.push(filter.length > li.length / 2 ? 1 : 0);
	epsilon.push(filter.length < li.length / 2 ? 1 : 0);
}
console.log(parseInt(gamma.join(""), 2) * parseInt(epsilon.join(""), 2));
