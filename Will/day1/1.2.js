let li = document
	.querySelector("pre")
	.textContent.split(/\r?\n/)
	.map((e) => e.parseInt(e));
let num = 0;
let prev = undefined;
li.forEach((e, i) => {
	if (i < li.length) {
		const curr = li[i] + li[i + 1] + li[i + 2];
		if (prev && curr > prev) num++;
		prev = curr;
	}
});
console.log(num);
