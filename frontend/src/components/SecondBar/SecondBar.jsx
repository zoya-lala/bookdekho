import React from 'react';
import SecondBarCSS from './styles.module.css';
import { Accordion, AccordionSummary, Button, Divider, Drawer, List, ListItemButton, ListItemText, Typography } from '@mui/material';
import { ExpandMore, Menu } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';



export const SecondBar = () => {
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  
    function handleOpen() {
        setOpen(!open);
    }
  
    function handleClose() {
        setOpen(false);
    }

  return (
    <div className={SecondBarCSS.SecondBar}>
        <div className={SecondBarCSS.Category}>
            <Button onClick={handleOpen} 
        variant="text" 
        startIcon={<Menu />}
        >
          Categories
           </Button>
           <Drawer anchor={"left"} open={open} 
                onClose={handleClose}
                PaperProps={{sx:{width:300, display:'inline-flex', alignItems:'center',p:1, background:'#c3c3c3'}}}
            >
              <Typography>Search by Categories</Typography><br></br>
              <div className={SecondBarCSS.CatAccordion}>
              <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"Ō
        >
          <Typography>Subject Wise</Typography>
        </AccordionSummary>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="English" />
          </ListItemButton>
          </List>
          <Divider />
          <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Computer Science" />
          </ListItemButton>
          </List>
          <Divider />
          <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Pharmacy" />
          </ListItemButton>
          </List>
          <Divider />
          <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Statistical Mathematics" />
          </ListItemButton>
          </List>

      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        
          <Typography>Department Wise</Typography>
        </AccordionSummary>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Department Of Computer Science " />
          </ListItemButton>
          <Divider sx={{pl:4}} />
          <ListItemButton sx={{pl: 4}}>
        <ListItemText primary="Department of Business Management" />
      </ListItemButton>
      <Divider sx={{pl:4}} />
          <ListItemButton sx={{pl: 4}}>
        <ListItemText primary="Department of Pharmacy" />
      </ListItemButton>
        </List>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        
          <Typography>Publication Year</Typography>
        </AccordionSummary>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="2023" />
          </ListItemButton>
          <Divider sx={{pl:4}} />
          <ListItemButton sx={{pl: 4}}>
        <ListItemText primary="2022" />
      </ListItemButton>
      <Divider sx={{pl:4}} />
          <ListItemButton sx={{pl: 4}}>
        <ListItemText primary="2021" />
      </ListItemButton>
      <Divider sx={{pl:4}} />
          <ListItemButton sx={{pl: 4}}>
        <ListItemText primary="2020" />
      </ListItemButton>
        </List>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        
          <Typography>Author Wise</Typography>
        </AccordionSummary>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Helen Dey" />
          </ListItemButton>
          <Divider sx={{pl:4}} />
          <ListItemButton sx={{pl: 4}}>
        <ListItemText primary="H.Keller" />
      </ListItemButton>
        </List>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        
          <Typography>Condition Wise</Typography>
        </AccordionSummary>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Excellent" />
          </ListItemButton>
          <Divider sx={{pl:4}} />
          <ListItemButton sx={{pl: 4}}>
        <ListItemText primary="Good" />
      </ListItemButton>
      <Divider sx={{pl:4}} />
          <ListItemButton sx={{pl: 4}}>
        <ListItemText primary="Average" />
      </ListItemButton>
      <Divider sx={{pl:4}} />
          <ListItemButton sx={{pl: 4}}>
        <ListItemText primary="Poor" />
      </ListItemButton>
        </List>
      </Accordion>

    

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        
          <Typography>Job-Oriented</Typography>
        </AccordionSummary>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Data Structures" />
          </ListItemButton>
          <Divider sx={{pl:4}} />
          <ListItemButton sx={{pl: 4}}>
        <ListItemText primary="Competitive Coding" />
      </ListItemButton>
      <Divider sx={{pl:4}} />
          <ListItemButton sx={{pl: 4}}>
        <ListItemText primary="Aptitude" />
      </ListItemButton>
      <Divider sx={{pl:4}} />
          <ListItemButton sx={{pl: 4}}>
        <ListItemText primary="Soft Skills" />
      </ListItemButton>
        </List>
      </Accordion>
              </div>
            </Drawer>
        </div>
        <div className={SecondBarCSS.CategoryBtn}>
            <Button variant="text" onClick={() => navigate("/donate")}>Donate Books</Button>
            <Button variant="text" onClick={() => navigate('/prouddonors')}>Proud Donors</Button>
        </div>
    </div>
  )
}

// export default SecondBar