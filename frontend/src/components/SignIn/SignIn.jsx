import React, { useRef, useState } from "react";
import CSS from "./styles.module.css";
import { Alert, Button, Snackbar, TextField } from "@mui/material";
import HeroIllustration from "../../assets/images/HeroIllustration.svg";
import AccountImg from "../../assets/images/account.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const SignIn = () => {
	const navigate = useNavigate();
	const [enrollNum, setEnrollNum] = useState("");
	const [mobNum, setMobNum] = useState("");
	const [open, setOpen] = useState(false);

	const [page1Active, setPage1Active] = useState("");
	const [page2Active, setPage2Active] = useState("");

	const OTP1 = useRef(null);
	const OTP2 = useRef(null);
	const OTP3 = useRef(null);
	const OTP4 = useRef(null);

	const handlePageChange = () => {
		setPage1Active("Page1Inactive");
		setPage2Active("Page2Active");
		setTimeout(() => {
			document.getElementById("OTP1").focus();
		}, 500);
	};

	const handleNextInput = (e) => {
		if (e.target.id === "OTP1") {
			if (OTP1.current.value !== "") {
				document.getElementById("OTP2").focus();
			}
		} else if (e.target.id === "OTP2") {
			if (OTP2.current.value !== "") {
				document.getElementById("OTP3").focus();
			}
		} else if (e.target.id === "OTP3") {
			if (OTP3.current.value !== "") {
				document.getElementById("OTP4").focus();
			}
		}
	};

	// const handleClick = () => {
	// 	setOpen(true);
	// };

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};

	const submitHandler = async (e) => {
		// console.log("working");
		e.preventDefault();
		console.log(enrollNum);

		const enrollNo = enrollNum;

		const config = {
			headers: {
				"Content-type": "application/json"
			},
		};

		await axios
			.post("/api/users/", {
				enrollNo
			}, config)
			.then((res) => {
				console.log(res.data);
				setMobNum(res.data);
				// localStorage.setItem("userInfo", JSON.stringify(res.data));
				handlePageChange();
			})
			.catch((err) => {
				setOpen(true);
				console.log(err.response.data.message);
			})
	};

	return (
		<div className={CSS.LoginPage}>
			<div className={CSS.HeroIllustration}>
				<img src={HeroIllustration} alt="BookDekho" />
			</div>
			<div className={CSS.Container}>
				<div className={CSS.Island}>
					<img src={AccountImg} alt="Account" className={CSS.AccountImg} />
					<h1>Login</h1>
					<div className={CSS.SlidableBox}>
						<div className={`${CSS.Pages} ${CSS.Page1} ${CSS[page1Active]}`}>
							<div className={CSS.TextBox}>
								<TextField
									id="outlined-basic"
									label="Enrollment Number"
									variant="outlined"
									value={enrollNum}
									onChange={(e) => setEnrollNum(e.target.value)}
								/>
							</div>
							<div className={CSS.Button}>
								<Button variant="contained" onClick={submitHandler}>
									Next
								</Button>
								<Snackbar open={open} autoHideDuration={6000} onClose={handleClose} >
									<Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
										User doesn't exists, Register first
										!
									</Alert>
								</Snackbar >
							</div>
							<div className={CSS.Footer}>
								<p>Haven't Created an account yet?</p>
								<Button variant="contained" onClick={() => navigate("/register")}>Register</Button>
							</div>
						</div>
						<div className={`${CSS.Pages} ${CSS.Page2} ${CSS[page2Active]}`}>
							OTP sent on +91 {mobNum}
							<br />
							<br />
							<br />
							Enter OTP for Verification
							<div className={CSS.TextBox}>
								<TextField
									id="OTP1"
									variant="outlined"
									type="number"
									ref={OTP1}
									onChange={(e) => handleNextInput(e)}
								/>
								<TextField
									id="OTP2"
									variant="outlined"
									type="number"
									ref={OTP2}
									onChange={(e) => handleNextInput(e)}
								/>
								<TextField
									id="OTP3"
									variant="outlined"
									type="number"
									ref={OTP3}
									onChange={(e) => handleNextInput(e)}
								/>
								<TextField
									id="OTP4"
									variant="outlined"
									type="number"
									ref={OTP4}
									onChange={(e) => handleNextInput(e)}
								/>
							</div>
							<div className={CSS.Button}>
								<Button variant="contained" >
									Login
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
