import React from 'react'; 
import classes from './Introduction.css'


function AboutUs(props){
    return(
        <div className={classes.App1}>
        <p className={classes.ptag1}>ITVersity Blog</p>
        <p className={classes.ptag2}>ITVersity is a technology solutions company that provides engineering and managed services, quality training and staffing, to our wide user base of students, working professionals, startups, and corporates. We work in the field of emerging technologies and are continually diversifying our work to include more exciting technological domains, to keep our user base up to date with the latest dynamic changes in the tech world.
        </p>
        </div>

    );
}

export default AboutUs;