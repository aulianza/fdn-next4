import React from "react";
import styled from "styled-components";

// import "../styles/globals.css";

const Layout = ({ children }) => {
	return <StyledLayout>{children}</StyledLayout>;
};

export default Layout;

const StyledLayout = styled.div`
	padding: 20px;
	background-color: red;
`;
