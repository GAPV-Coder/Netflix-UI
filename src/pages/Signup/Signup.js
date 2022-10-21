import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged
} from "firebase/auth";
import { firebaseAuth } from "../../utils/Config-firebase";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import Header from "../../components/Header/Header";
import { Container } from "./Styles";

const Signup = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [formValues, setFormValues] = useState({
		email: "",
		password: ""
	});
	const navigate = useNavigate();

	const handleSignIn = async () => {
		try {
			const { email, password } = formValues;
			await createUserWithEmailAndPassword(firebaseAuth, email, password);
		} catch (error) {
			console.log(error);
		}
	};

	onAuthStateChanged(firebaseAuth, currentUser => {
		if (currentUser) navigate("/");
	});

	return (
		<Container showPassword={showPassword}>
			<BackgroundImage />
			<div className="content">
				<Header login />
				<div className="body flex column a-center j-center">
					<div className="text flex column">
						<h1>Unlimited movies, TV shows and more.</h1>
						<h4>Watch anywhere. Cancel anytime.</h4>
						<h6>
							Ready to watch? Enter your email to create or restart membership.
						</h6>
					</div>
					<div className="form">
						<input
							type="email"
							placeholder="Email address"
							onChange={e =>
								setFormValues({
									...formValues,
									[e.target.name]: e.target.value
								})
							}
							name="email"
							value={formValues.email}
						/>
						{showPassword && (
							<input
								type="password"
								placeholder="Password"
								onChange={e =>
									setFormValues({
										...formValues,
										[e.target.name]: e.target.value
									})
								}
								name="password"
								value={formValues.password}
							/>
						)}
						{!showPassword && (
							<button onClick={() => setShowPassword(true)}>Get Started</button>
						)}
					</div>
					{showPassword && <button onClick={handleSignIn}>Log In</button>}
				</div>
			</div>
		</Container>
	);
};

export default Signup;
