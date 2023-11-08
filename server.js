const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/products", (req, res) => {
	const url =
		"https://femaledaily-products.loca.lt/products?_page=1&_limit=10&_sort=product_name&_order=asc";

	fetch(url, {
		headers: {},
	})
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			res.send(data);
		});
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
