import styled from "styled-components";

export const Container = styled.div`
	background-color: black;
	height: 100vh;
	.content {
		margin: 2.3rem;
		margin-top: 6.5rem;
		gap: 3rem;

		h1 {
			margin-left: 3rem;
			color: white;
		}
		.grid {
			flex-wrap: wrap;
			gap: 1rem;
		}
	}
`;
