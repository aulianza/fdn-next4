import { Modal } from "antd";
import React, { useState } from "react";
import { useProductsStore } from "../store/products";
import axios from "axios";

const ModalAddProduct = ({ isOpen, handleCancel }) => {
	const [setProducts] = useProductsStore((state) => [state.setProducts]);

	const [newProduct, setNewProduct] = useState({});

	const handleChange = (e) => {
		setNewProduct({ ...product, [e.target.name]: e.target.value });
	};

	const handleAddProduct = async (e) => {
		e.preventDefault();

		const payload = {
			name: newProduct.name,
			status: newProduct.status,
		};

		try {
			const response = await axios.post("http://localhost:8080/products", {
				payload,
			});
			console.log("aulianza ~ post ~ response : ", response);

			setProducts(response.data);
			handleCancel();
		} catch (error) {
			console.error("aulianza ~ error fetching products:", error);
		}
	};

	return (
		<div className="container">
			<Modal
				title="Add Product"
				open={isOpen}
				onOk={handleAddProduct}
				onCancel={handleCancel}
				okText="Add"
				width={350}
			>
				<form className="form-container">
					<div className="form-group">
						<label htmlFor="name">Product Name</label>
						<input type="text" name="name" onChange={handleChange} />
					</div>
					<div className="form-group">
						<label htmlFor="status">Status</label>
						<input type="text" name="status" onChange={handleChange} />
					</div>
				</form>
			</Modal>

			<style jsx>
				{`
					.container {
						padding: 20px 30px;
					}

					.form-container {
						display: flex;
						flex-direction: column;
						padding: 20px 0px;
						text-align: center;
					}

					.form-group {
						display: flex;
						flex-direction: column;
						margin-bottom: 10px;
					}
				`}
			</style>
		</div>
	);
};

export default ModalAddProduct;
