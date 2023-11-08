import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Router from "next/router";

const LoginPage = () => {
	const [email, setEmail] = useState("");

	const handleSubmit = async () => {
		try {
			const response = await axios.get(
				`https://femaledaily-users.loca.lt/users?email=${email}`
			);
			const token = response.data[0].token;
			if (token) {
				Cookies.set("token", token);
				Router.push("/products");
			}
		} catch (error) {
			console.error("aulianza ~ err:", error);
		}
	};

	return (
		<div className="container">
			<div className="form-container">
				<label htmlFor="email">Email</label>
				<input
					type="text"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<button type="button" onClick={handleSubmit}>
					Login
				</button>
			</div>

			<style jsx>{`
				.container {
					display: flex;
					justify-content: center;
					align-items: center;
					height: 100vh;
				}
				.form-container {
					display: flex;
					flex-direction: column;
					align-items: center;
					border: 1px solid #ccc;
					padding: 50px;
					border-radius: 12px;
				}
				input {
					padding: 10px;
					margin: 10px 0;
				}
				button {
					padding: 10px 20px;
					background-color: #4caf50;
					color: #fff;
					border: none;
					cursor: pointer;
				}
			`}</style>
		</div>
	);
};

export default LoginPage;
