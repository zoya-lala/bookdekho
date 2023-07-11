import React from 'react';
// import { useState } from 'react';
import ProfilePageCSS from './styles.module.css';
import EditProfileImg from '../../assets/images/Personal-settings.svg'
import { Button, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material';

export const ProfilePage = () => {
  const [branch, setBranch] = React.useState('');
  const [sem, setSem] = React.useState('');


  const handleChange = (event) => {
    setBranch(event.target.value);
  };

    return (
    <div className={ProfilePageCSS.ProfilePage}>
          <div className={ProfilePageCSS.Image}>
            <img src={EditProfileImg} alt="Edit"></img>
          </div>

          <div className={ProfilePageCSS.FormCard}>
                  <div className={ProfilePageCSS.FormHeader}>EDIT PROFILE</div>

                  <div className={ProfilePageCSS.FormBody}>
                       <div className={ProfilePageCSS.EnrollNum}>
                       <label>Enrollment Number</label>
                       <TextField 
                       disabled 
                       value="0206CA211069" 
                       variant="outlined" 
                       sx= {{width: 270, marginLeft:5}}
                       />
                       </div>

                      <div className={ProfilePageCSS.Name}>
                      <label>Name</label>
                      <TextField 
                      placeholder='Name' 
                      variant="outlined" 
                      sx= {{width: 271,marginLeft: 16.84}}
                      />
                      </div>

                      <div className={ProfilePageCSS.Email}>
                      <label>E-Mail</label>
                      <TextField 
                      placeholder='E-mail' 
                      variant="outlined"
                      sx= {{width: 272, marginTop: 1, marginLeft: 16.57}}
                      />
                      </div>

                      <div className={ProfilePageCSS.Phone}>
                      <label>Contact Number</label>
                      <TextField 
                      placeholder='Contact Number' 
                      variant="outlined"
                      sx= {{width: 274.5, marginTop: 1, marginLeft:7.25}}
                       />
                      </div>

                      <div className={ProfilePageCSS.BranchSem}>
                      <div className={ProfilePageCSS.Branch}>
                          <FormControl sx={{ minWidth: 160 }}>
                              <InputLabel>Branch</InputLabel>
                              <Select
                                value={branch}
                                onChange={handleChange}
                                label="Branch"
                                fullWidth
                              >
        
                              <MenuItem value={1}>MCA</MenuItem>
                              <MenuItem value={2}>B.E</MenuItem>
                              <MenuItem value={3}>B.Tech</MenuItem>
                             </Select>
                          </FormControl>
                        </div>

                        <div className={ProfilePageCSS.Semester}>
                            <FormControl sx={{ minWidth: 160 }}>
                              <InputLabel>Semester</InputLabel>
                              <Select
                                value={sem}
                                onChange={event => {setSem(event.target.value)}}
                                label="Semester"
                                fullWidth
                              >
        
                              <MenuItem value={4}>I</MenuItem>
                              <MenuItem value={5}>II</MenuItem>
                              <MenuItem value={6}>III</MenuItem>
                             </Select>
                            </FormControl>
                        </div>
                        </div>
                        <div className={ProfilePageCSS.Department}>
                            <FormControl>
                              <FormLabel id="demo-radio-buttons-group-label">Department</FormLabel>
                              <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="mca"
                                name="radio-buttons-group"
                              >
                                <FormControlLabel value="mca" control={<Radio />} label="Dept of MCA" />
                                <FormControlLabel value="be" control={<Radio />} label="Dept of BE" />
                                {/* <FormControlLabel value="mba" control={<Radio />} label="Dept of MBA" /> */}
                                <FormControlLabel value="other" control={<Radio />} label="Other" />

                              </RadioGroup>
                            </FormControl>
                        </div>
                        <div className={ProfilePageCSS.Save}>
                        <Button variant="contained">Update</Button>
                        </div>
                  </div>
          </div>
    </div>
  )
}
