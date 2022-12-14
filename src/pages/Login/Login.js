import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../../utils/Config-firebase";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import Header from "../../components/Header/Header";
import { Container } from "./Styles";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleLogin = async () => {
		try {
			await signInWithEmailAndPassword(firebaseAuth, email, password);
		} catch (error) {
			console.log(error.code);
		}
	};

	onAuthStateChanged(firebaseAuth, currentUser => {
		if (currentUser) navigate("/");
	});

	return (
		<Container>
			<BackgroundImage />
			<div className="content">
				<Header />
				<div className="form-container flex column a-center j-center">
					<div className="form flex column a-center j-center">
						<div className="title">
							<h3>Login</h3>
						</div>
						<div className="container flex column">
							<input
								type="text"
								placeholder="Email"
								onChange={e => setEmail(e.target.value)}
								value={email}
							/>
							<input
								type="password"
								placeholder="Password"
								onChange={e => setPassword(e.target.value)}
								value={password}
							/>
							<button onClick={handleLogin}>Login to your account</button>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Login;
