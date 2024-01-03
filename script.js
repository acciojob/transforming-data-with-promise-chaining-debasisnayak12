//your JS code here. If required.
const btn = document.getElementById("btn");
const ip = document.getElementById("ip");
const output = document.getElementById("output");

btn.addEventListener('click', () => {
	const promise1 = new Promise((resolve) => {
		setTimeout(() => {
			resolve(Number(ip.value));
		}, 2000);
	});

	promise1.then((num) => {
		output.textContent = `Result: ${num}`;
		return num;
	})
	.then((num) => {
		const promise2 = new Promise((resolve) => {
			setTimeout(() => {
				resolve(num * 2);
			}, 1000);
		});
		return promise2;
	})
	.then((num) => {
		output.textContent = `Result: ${num}`;
		return num;
	})
	.then((num) => {
		const promise3 = new Promise((resolve) => {
			setTimeout(() => {
				resolve(num - 2);
			}, 1000);
		});
		return promise3;
	})
	.then((num) => {
		output.textContent = `Result: ${num}`;
		return num;
	})
	.then((num) => {
		const promise4 = new Promise((resolve) => {
			setTimeout(() => {
				resolve(num / 2);
			}, 1000);
		});
		return promise4;
	})
	.then((num) => {
		output.textContent = `Result: ${num}`;
		return num;
	})
	.then((num) => {
		const promise5 = new Promise((resolve) => {
			setTimeout(() => {
				resolve(num + 10);
			}, 1000);
		});
		return promise5;
	})
	.then((num) => {
		output.textContent = `Final Result: ${num}`;
	})
	.catch((error) => {
		console.log(error);
	});
});
