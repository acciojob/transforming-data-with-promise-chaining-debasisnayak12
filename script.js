//your JS code here. If required.
const btn = document.getElementById("btn");
const ip = document.getElementById("ip");
const output = document.getElementById("output");

btn.addEventListener('click', () => {
	try {
		const initialNumber = parseInt(ip.value);
		const initialPromise = new Promise((resolve) => {
			setTimeout(() => resolve(initialNumber), 2000);
		});

		initialPromise
		  .then((number) => {
			  output.textContent = `Result: ${number}`;
			  return new Promise((resolve) => {
				 setTimeout(() => resolve(number), 2000); 
			  });
		  })
		 .then((number) => {
			 return new Promise((resolve) => {
				setTimeout(() => resolve(number*2), 1000); 
			 });
		 })
		.then((number) => {
			return new Promise((resolve) => {
				setTimeout(() => resolve(number-3), 1000);
			});
		})
		.then((number) => {
			return new Promise((resolve) => {
				setTimeout(() => resolve(number/2), 1000);
			});
		})
		.then((number) => {
			return new Promise((resolve) => {
				setTimeout(() => resolve(number+10), 1000);
			});
		})
		.then((final) => {
			output.textContent = `Final Result: ${final}`;
		})
		.catch((err) =>{
			output.textContent = 'Error occoured: ' + err.message;	
		})
		
	} catch (error) {
		output.textContent = 'Invalid input';
	}
});
