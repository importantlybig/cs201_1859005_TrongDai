const showproduct = document.querySelector('.showProducts1')

document.addEventListener('DOMContentLoaded', () => {
	getProducts()
});


function getProducts () {
	const url = 'https://fakestoreapi.com/products?limit=9';

	const xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	xhr.onload = function () {
		if(this.status === 200) {
			let results = JSON.parse(this.responseText);
			//console.log(results);
			showProducts(results);
		}
	}
	xhr.send();
}

function showProducts (products) {
	let output = '';

	products.forEach((product) => {
		output += `
			<div class="col-lg-4">
				<div class="card text-center p-4">
		            <img class="card-img-top img-fluid fiximg" src="${product.image}" alt="">
		            <div class="card-body">
		                <h4 class="text-dark">${product.title}</h4>
		                <p class="text-primary text-bold">$ ${product.price}</p>
		            </div>
        		</div>
			</div>
		`;
	})

	showproduct.innerHTML = output;
}