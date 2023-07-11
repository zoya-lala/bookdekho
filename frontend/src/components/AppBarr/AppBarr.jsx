import AppBarrCSS from './styles.module.css';
import Logo from '../../assets/images/Logo.svg';
import { Button, Divider, Fab, IconButton, InputBase, TextField, Tooltip } from '@mui/material';
import { AccountCircle, AccountCircleRounded, ChatRounded, CloseFullscreenOutlined, CloseOutlined, ForumOutlined, LoginRounded, Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { useState } from 'react';


export const AppBarr = () => {
    const navigate = useNavigate();
    const [NSActive, setNSActive] = useState(false);
    const HandleNotificationF = () => {
        // console.log("I was clicked");
        setNSActive(!NSActive);
        // if (NSActive) {
        //    Fab <CloseOutlined />
        // }
        // else
        // {  
        // <NotificationsNoneOutlinedIcon />
        // }
    }

    // const clearAllNotifications = () => {
    //     // Clear the notifications array
    //     notifications = [];
    // }

    return (
        <>
            <div className={AppBarrCSS.AppBarr}>
                <Tooltip title="Go to BookDekho Home">
                    <div className={AppBarrCSS.Logo} onClick={() => navigate("/")}>
                        <img src={Logo} alt='Logo' />
                    </div>
                </Tooltip>
                <div className={AppBarrCSS.SearchBarContainer}>
                    <div className={AppBarrCSS.SearchBar}>
                        <TextField size='small' id="filled-basic" label="Search for books, department, publisher, etc" variant="filled" />
                        <IconButton type="button" sx={{ p: '10px', ml: 52 }} aria-label="search" onClick={() => navigate("/search")}>
                            <Search />
                        </IconButton>
                    </div>
                </div>
                <div className={AppBarrCSS.NavButtons}>
                    <Fab variant="extended" size="medium" color="primary" aria-label="add" onClick={() => navigate("/login")}>
                        <AccountCircle sx={{ mr: 1 }} />
                        Login
                    </Fab>
                    <Tooltip title="Notifications">
                        <Fab color="primary" aria-label="add" onClick={HandleNotificationF}>
                            {NSActive ?
                                <CloseOutlined />
                                :
                                <NotificationsNoneOutlinedIcon />
                            }
                        </Fab>
                    </Tooltip>
                </div>
            </div>
            {
                NSActive &&
                <div className={AppBarrCSS.NotificationPanel}>
                    <div className={AppBarrCSS.FillerBG} onClick={HandleNotificationF}></div>
                    <div className={AppBarrCSS.Notification}>
                        <div className={AppBarrCSS.Pointed}> </div>
                        <div className={AppBarrCSS.Heading}>
                            Notifications
                        </div>
                        <Divider />
                        <div className={AppBarrCSS.Content}>hjk</div>
                        <div className={AppBarrCSS.Clear}>
                            <Button>Clear all</Button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
