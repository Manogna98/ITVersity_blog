import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import classes from "./Expandable.css";
import {Link} from 'react-router-dom';



function SimpleExpansionPanel(props) {
  return (
    <div className={classes.root}>
      <ExpansionPanel position="static" Style="background-color:#333333">
        <ExpansionPanelDetails>
          <Typography Style="background-color:#333333" className={classes.heading}>
            <table>
              <tbody>
                <tr>
                    <td rowSpan="2" width="800" className={classes.td1}><h3>About Us</h3>
                    <p className={classes.ptag}>TVersity is a technology solutions company that provides engineering and managed services, quality training and staffing, to our wide user base of students, working professionals, startups, and corporates. We work in the field of emerging technologies and are continually diversifying our work to include more exciting technological domains, to keep our user base up to date with the latest dynamic changes in the tech world.</p>
                     </td>
                     
                     <td className={classes.td1}><h3>Admin</h3>
                     <Link to="/Admin/Blogs" className={classes.link}>Manage Blogs</Link><br />
                     <Link to="/" className={classes.link}>Home</Link>
                     </td>
                </tr>
                 <tr>
                     
                      <td className={classes.td1}>  <h3>Contact Us</h3>
                      <a href="https://twitter.com/itversity" className={classes.link}>
                         Follow on twitter
                      </a><br></br>
                         <a href="https://www.facebook.com/itversity" className={classes.link}>Like on Facebook</a>
                         <br></br>
                         <a href="www.gmail.com" className={classes.link}>Email Us</a>
                        </td>
                 </tr>
                
              </tbody>
            </table>
          </Typography>
        </ExpansionPanelDetails>
        <ExpansionPanelSummary expandIcon={<MenuIcon className={classes.menu}/>}>
          <Typography><div className={classes.heading}>ITversity Blog</div></Typography>
        </ExpansionPanelSummary>
        </ExpansionPanel>
        </div>
        
      
    
  );
}



export default SimpleExpansionPanel;
