import { useState, useEffect } from "react";
import axios from "axios";
import { Table, Spin, Input, Button } from "antd";
import { useProductsStore } from "../store/products";
import ModalAddProduct from "../components/ModalAddProduct";

const { Search } = Input;

const ProductPage = () => {
	const [loading, setLoading] = useState(true);
	const [products, setProducts] = useProductsStore((state) => [
		state.products,
		state.setProducts,
	]);
	const [isShowAddModal, setShowAddModal] = useState(false);
	const [search, setSearch] = useState("");

	const filteredProducts = products.filter((product) =>
		product.product_name.toLowerCase().includes(search.toLowerCase())
	);

	const handleFilter = (e) => setSearch(e.target.value);

	const handleShowModal = () => setShowAddModal(!isShowAddModal);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await axios.get("http://localhost:8080/products");
				setProducts(response.data);
				setLoading(false);
			} catch (error) {
				console.error("aulianz ~ error fetching products:", error);
				setLoading(false);
			}
		};

		fetchProducts();
	}, [setProducts]);

	const columns = [
		{
			title: "Product Name",
			dataIndex: "product_name",
			key: "product_name",
		},
		{
			title: "Memory",
			dataIndex: "memory",
			key: "memory",
		},
		{
			title: "Action",
			key: "action",
			render: (text, record) => (
				<span>
					<Button type="primary" style={{ marginRight: 16 }}>
						Edit
					</Button>
					<Button type="primary" style={{ marginRight: 16, background: "red" }}>
						Delete
					</Button>
				</span>
			),
		},
	];

	return (
		<div className="container">
			<h1>Product Page</h1>
			<div
				style={{
					marginBottom: 16,
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<div>
					<Search
						placeholder="Search product"
						style={{ width: 200 }}
						onChange={handleFilter}
					/>
				</div>
				<div>
					<Button type="primary" onClick={handleShowModal}>
						Add New Product
					</Button>
				</div>
			</div>

			{loading ? (
				<div style={{ textAlign: "center", margin: "50px" }}>
					<Spin size="large" />
				</div>
			) : (
				<Table dataSource={filteredProducts} columns={columns} />
			)}

			{isShowAddModal && (
				<ModalAddProduct
					isOpen={isShowAddModal}
					handleCancel={handleShowModal}
				/>
			)}

			<style jsx>
				{`
					.container {
						padding: 20px 30px;
					}

					h1 {
						text-align: center;
					}
				`}
			</style>
		</div>
	);
};

export default ProductPage;
