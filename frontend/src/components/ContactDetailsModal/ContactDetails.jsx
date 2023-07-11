import React, { useEffect, useState } from 'react'
import CSS from './styles.module.css'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

export const ContactDetails = ({ Name, Email, isActive }) => {
    const [open1, setOpen1] = useState(false);

    useEffect(() => {
        if (isActive) {
            setOpen1(true);
        } else {
            setOpen1(false);
        }
    }, [isActive]);


    // const handleClickOpen1 = () => {
    //     setOpen1(true);
    // };

    const handleClose1 = () => {
        setOpen1(false);
    };
    return (
        <div className={CSS.ContactDetailsModal}>
            <Dialog open={open1} onClose={handleClose1} fullWidth>
                <DialogTitle>Owner Details</DialogTitle>
                <DialogContent>
                    <DialogContentText >
                        Owner Name: {Name} <br></br>
                        E-mail: {Email} <br></br>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose1}>Ok</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
