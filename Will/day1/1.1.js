let li = document.querySelector("pre").textContent.split(/\r?\n/);
let num = 0;
li.forEach((e, i) => {
	if (i > 0 && parseInt(e) > parseInt(li[i - 1])) num++;
});
console.log(num);
