import React, { useRef, useState } from "react";
import CSS from "./styles.module.css";
import { Alert, Box, Button, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, Snackbar, TextField } from "@mui/material";
import HeroIllustration from "../../assets/images/HeroIllustration.svg";
import AccountImg from "../../assets/images/account.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Register = () => {
	const navigate = useNavigate();

	const [enrollNo, setEnrollNo] = useState("");
	const [mobNumber, setMobNumber] = useState("");
	const [name, setName] = useState("");
	const [dept, setDept] = useState("");
	const [college, setCollege] = useState("");
	const [semester, setSemester] = useState("");
	const [pic, setPic] = useState();
	const [open, setOpen] = useState(false);
	const [open1, setOpen1] = useState(false);

	const [page1Active, setPage1Active] = useState("");
	const [page2Active, setPage2Active] = useState("");
	const [page3Active, setPage3Active] = useState("");

	const OTP1 = useRef(null);
	const OTP2 = useRef(null);
	const OTP3 = useRef(null);
	const OTP4 = useRef(null);

	const handleImage = (e) => {
		// console.log("success");
		// alert("button getting clicked");
		console.log(e.target.files);
		setPic(URL.createObjectURL(e.target.files[0]));
	};

	const handlePageChange = () => {
		setPage1Active("Page1Inactive");
		setPage2Active("Page2Active");
		setTimeout(() => {
			document.getElementById("OTP1").focus();
		}, 500);
	};

	const handlePageChange2 = () => {
		setPage2Active("Page2Inactive");
		setPage3Active("Page3Active");
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


	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};

	const handleClose1 = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen1(false);
	};

	const submitHandler = async (e) => {
		console.log("working");
		e.preventDefault();
		// console.log(enrollNo);
		try {
			const config = {
				headers: {
					"Content-type": "application/json"
				},
			};

			await axios
				.post("/api/users/register", {
					enrollNo, mobNumber, name, college, dept, semester, pic
				}, config)
				.then((res) => {
					setOpen(true);
					console.log(res.data);
					localStorage.setItem("userInfo", JSON.stringify(res.data));

				})

		} catch (err) {
			setOpen1(true);
			console.log(err.response.data.message);
		}
	}

	return (
		<div className={CSS.RegisterPage}>
			<div className={CSS.HeroIllustration}>
				<img src={HeroIllustration} alt="BookDekho" />
			</div>
			<div className={CSS.Container}>
				<div className={CSS.Island}>
					<h1>Register</h1>
					{!page3Active ?
						<img src={AccountImg} alt="Account" className={CSS.AccountImg} />
						:
						<div className={CSS.DPContainer}>
							<div>
								<img src={pic} alt="Accountdp" className={CSS.AccountImg} />
							</div>
							{/* <Button variant="outlined" value={file} onClick={handleImage} >
								Add Profile Picture
							</Button> */}
							<input type="file" id="upload" onChange={handleImage} hidden />
							<label for="upload">Upload Image</label>
						</div>
					}
					<div className={CSS.SlidableBox}>
						<div className={`${CSS.Pages} ${CSS.Page1} ${CSS[page1Active]}`}>
							<div className={CSS.TextBox}>
								<TextField
									id="outlined-basic"
									label="Enrollment Number"
									variant="outlined"
									value={enrollNo}
									onChange={(e) => setEnrollNo(e.target.value)}
								/>
							</div>
							<div className={CSS.TextBox}>
								<TextField
									id="outlined-basic"
									label="Phone Number"
									variant="outlined"
									value={mobNumber}
									onChange={(e) => setMobNumber(e.target.value)}
								/>
							</div>
							<div className={CSS.Button}>
								<Button variant="contained" onClick={handlePageChange}>
									Next
								</Button>
							</div>
							<div className={CSS.Footer}>
								<p>Already created an account?</p>
								<Button variant="contained" onClick={() => navigate("/login")}>Login</Button>
							</div>
						</div>
						<div className={`${CSS.Pages} ${CSS.Page2} ${CSS[page2Active]}`}>
							OTP sent on +91xxxxxx3877
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
								<Button variant="contained" onClick={handlePageChange2}>
									Next
								</Button>
							</div>
						</div>
						<div className={`${CSS.Pages} ${CSS.Page3} ${CSS[page3Active]}`}>
							<h4>Fill all the fields</h4>
							<br />
							<div className={CSS.TextBox}>
								<TextField
									id="outlined-basic"
									label="Full Name"
									variant="outlined"
									value={name}
									onChange={(e) => setName(e.target.value)}

								/>
							</div>

							<div className={CSS.TextBox}>
								<FormControl size="small" fullWidth>
									<InputLabel id="college-label">College</InputLabel>
									<Select
										labelId="college-label"
										id="college"
										value={college}
										onChange={(e) => setCollege(e.target.value)}
										label="College"
									>
										<MenuItem value="GGITS">GGITS</MenuItem>
										<MenuItem value="GGCT">GGCT</MenuItem>
										<MenuItem value="GGCE">GGCE</MenuItem>
									</Select>
								</FormControl>
							</div>
							<div className={CSS.TextBox}>
								<FormControl size="small" fullWidth>
									<InputLabel id="department-label">Department</InputLabel>
									<Select
										labelId="department-label"
										id="department"
										value={dept}
										onChange={(e) => setDept(e.target.value)}
										label="Department"
									>
										<MenuItem value="CSE">CSE</MenuItem>
										<MenuItem value="CSE-DS">CSE - DS</MenuItem>
										<MenuItem value="CSE-AIML">CSE - AI & ML</MenuItem>
										<MenuItem value="CSE-IOT">CSE - IOT</MenuItem>
										<MenuItem value="ECE">ECE</MenuItem>
										<MenuItem value="EE">EE</MenuItem>
										<MenuItem value="ME">ME</MenuItem>
										<MenuItem value="EX">EX</MenuItem>
										<MenuItem value="IT">IT</MenuItem>
										<MenuItem value="Civil">Civil</MenuItem>
										<MenuItem value="CSBS">CSBS</MenuItem>
										<MenuItem value="MCA">MCA</MenuItem>
										<MenuItem value="MBA">MBA</MenuItem>
										<MenuItem value="Pharmacy">Pharmacy</MenuItem>
										<MenuItem value="CSD">CSD</MenuItem>
										<MenuItem value="AIR">AIR</MenuItem>
									</Select>
								</FormControl>
							</div>
							<div className={CSS.TextBox}>
								<TextField
									id="outlined-basic"
									label="Semester (in Numbers. Ex- 1, 2, 3, etc)"
									variant="outlined"
									value={semester}
									onChange={(e) => setSemester(e.target.value)}

								/>
							</div>
							<div className={CSS.Button}>
								<Button variant="contained" onClick={submitHandler}>
									Register
								</Button>
								<Snackbar open={open} autoHideDuration={6000} onClose={handleClose} >
									<Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
										User Registered Successfully
										!
									</Alert>
								</Snackbar >
								<Snackbar open={open1} autoHideDuration={6000} onClose={handleClose1} >
									<Alert onClose={handleClose1} severity="error" sx={{ width: '100%' }}>
										User Already Exists, Do Login
										!
									</Alert>
								</Snackbar >
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
