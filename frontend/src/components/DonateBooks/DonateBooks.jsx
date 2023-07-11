import React from 'react'
import DonateBooksCSS from './styles.module.css'
import { Box, Button, Checkbox, Divider, FormControl, FormControlLabel, FormGroup, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, Tab, Tabs, TextField, Typography } from '@mui/material'
import { useState } from 'react';
import { PhotoCamera } from '@mui/icons-material';
import VolunteerActivismRoundedIcon from '@mui/icons-material/VolunteerActivismRounded';
import axios from 'axios';

export const DonateBooks = () => {
  const [bookCond, setBookCond] = React.useState('');
  const [language, setLanguage] = React.useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [pics, setPics] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [rate, setRate] = useState("");
  const [mrp, setMrp] = useState("");
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (event) => {
    setBookCond(event.target.value);
  };


  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  const handleImage = (e) => {
    console.log(e.target.files);
    // setPics(e.target.files[2]);
    let pics = [];
    for (let i = 0; i < e.target.files.length; i++) {
      pics.push(e.target.files[i]);
    }
    setPics(pics);

  };

  const submitHandler = async (e) => {
    console.log("working");
    e.preventDefault();
    // console.log(enrollNo);
    try {
      const config = {
        headers: {
          "Content-type": "multipart/form-data"
        },
      };

      const formData = new FormData();
      for (let i = 0; i < pics.length; i++) {
        formData.append('images', pics[i]);
      }
      formData.append('title', title);
      formData.append('author', author);
      formData.append('year', year);
      formData.append('description', description);
      formData.append('language', language);
      formData.append('mrp', mrp);
      formData.append('rate', rate);
      formData.append('bookCond', bookCond);


      await axios
        .post("/api/books/addBook", formData, config)
        .then((res) => {
          // setOpen(true);
          console.log(res.data);
          localStorage.setItem("userInfo", JSON.stringify(res.data));

        })

    } catch (err) {
      // setOpen1(true);
      console.log(err.response.data.message);
    }
  }

  return (
    <div className={DonateBooksCSS.DonateBooks}>
      {
        <div className={DonateBooksCSS.Form}>
          <div className={DonateBooksCSS.Header}>
            <Box>
              <Box>
                <Tabs value={tabIndex} onChange={handleTabChange} >
                  <Tab label="Book Details" />
                  <Tab label="Upload" />
                </Tabs>
              </Box>
            </Box>
          </div>
          <Divider />
          <Box sx={{ padding: 2 }}>
            {tabIndex === 0 && (
              <Box>
                {/* <Typography>The first tab</Typography> */}
                <div className={DonateBooksCSS.Main}>
                  <div className={DonateBooksCSS.Checkbox}>
                    <FormGroup>
                      <FormControlLabel control={<Checkbox />} onClick={() => setIsDisabled(!isDisabled)} label="I want to donate this book." />
                      {/* {isDisabled ? "Enable Input" : "Disable Input"} */}
                    </FormGroup>
                    <VolunteerActivismRoundedIcon />
                  </div>
                  <div className={DonateBooksCSS.BookName}>
                    <label>Book Name</label>
                    <TextField
                      placeholder='Name'
                      variant="outlined"
                      sx={{ width: 271, marginLeft: 6.6 }}
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div className={DonateBooksCSS.BookCondition}>
                    <label>Book Condition</label>
                    <FormControl sx={{ minWidth: 160, ml: 3.7 }}>
                      <InputLabel>Book Condition</InputLabel>
                      <Select
                        value={bookCond}
                        onChange={handleChange}
                        label="Book Condition"
                        fullWidth
                      >

                        <MenuItem value="Excellent">Excellent</MenuItem>
                        <MenuItem value="VeryGood">Very Good</MenuItem>
                        <MenuItem value="Good">Good</MenuItem>
                        <MenuItem value="Average">Average</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className={DonateBooksCSS.Author}>
                    <label>Author</label>
                    <TextField
                      placeholder='Author'
                      variant="outlined"
                      sx={{ width: 274.5, marginLeft: 11.34 }}
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                    />
                  </div>
                  <div className={DonateBooksCSS.Year}>
                    <label>Published Year</label>
                    <TextField
                      placeholder='Year'
                      variant="outlined"
                      sx={{ width: 274.5, marginLeft: 4 }}
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                    />
                  </div>
                  <div className={DonateBooksCSS.Language}>
                    <label>Language</label>
                    <FormControl sx={{ minWidth: 160, ml: 8.3 }}>
                      <InputLabel>Language</InputLabel>
                      <Select
                        value={language}
                        onChange={event => { setLanguage(event.target.value) }}
                        label="Language"
                        fullWidth
                      >

                        <MenuItem value={1}>English</MenuItem>
                        <MenuItem value={2}>Hindi</MenuItem>
                      </Select>
                    </FormControl>
                    {/* <TextField 
                      placeholder='Year' 
                      variant="outlined"
                      sx= {{width: 274.5, marginLeft:8}}
                       /> */}
                  </div>
                  {
                    !isDisabled &&
                    <>
                      <div className={DonateBooksCSS.Price}>
                        <label>Rate</label>
                        <FormControl fullWidth sx={{ ml: 12.5 }} >
                          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-amount"
                            disabled={isDisabled}
                            startAdornment={<InputAdornment position="start">₹</InputAdornment>}
                            label="Amount"
                            value={rate}
                            onChange={(e) => setRate(e.target.value)}
                          />
                        </FormControl>
                      </div>
                      <div className={DonateBooksCSS.Price1}>
                        <label>MRP</label>
                        <FormControl fullWidth sx={{ ml: 12.5 }} >
                          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-amount"
                            disabled={isDisabled}
                            startAdornment={<InputAdornment position="start">₹</InputAdornment>}
                            label="Amount"
                            value={mrp}
                            onChange={(e) => setMrp(e.target.value)}
                          />
                        </FormControl>
                      </div>
                    </>
                  }
                </div>
              </Box>
            )}
            {tabIndex === 1 && (
              <Box>
                <div className={DonateBooksCSS.SecondTab}>
                  <Typography><i>Upload Images of Books with their Description</i></Typography>
                  <div div className={DonateBooksCSS.Upload}>
                    <div className={DonateBooksCSS.Structure}>
                      {/* <img src={pic} alt="Accountdp" /> */}
                      {pics && Array.from(pics).map((pics) => (
                        <div className={DonateBooksCSS.Store}>
                          <img src={URL.createObjectURL(pics)} alt={pics.name} key={pics.name} />
                        </div>
                      ))}
                    </div>
                    <div className={DonateBooksCSS.Button}>
                      <input type="file" id="upload" onChange={handleImage} hidden multiple />
                      <label for="upload">Upload Images</label>
                    </div>
                  </div>
                  <div className={DonateBooksCSS.Description}>
                    <TextField
                      required
                      fullWidth
                      id="outlined-multiline-static"
                      label="Description"
                      multiline
                      rows={4}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <div className={DonateBooksCSS.Submit}>
                    <Button variant="contained" component="label" onClick={submitHandler}>
                      Submit
                    </Button>
                  </div>
                </div>

              </Box>
            )}
          </Box>

        </div>
      }
    </div >
  )
}
