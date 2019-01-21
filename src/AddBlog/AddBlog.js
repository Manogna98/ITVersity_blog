import React, { Component } from 'react';
import classes from './AddBlog.css';

class AddBlog extends Component {
    state = {
        ImgMediaCard: {
        title : '',
        desc : '',
        imglink : '',
        bloglink : ''
    }
}


constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleSubmit(event, card_temp) {
    event.preventDefault();
    card_temp = {
        title : '',
        desc : '',
        imglink : '',
        bloglink : ''
    }

    card_temp.title = event.target.title.value;
    card_temp.desc = event.target.desc.value;
    card_temp.imglink = event.target.imglink.value;
    card_temp.bloglink = event.target.bloglink.value;

    this.props.click(card_temp);
}

render() {
    return (
        <form onSubmit={this.handleSubmit} className={classes.form}>
            <h1 className={classes.h1}>Add Blog</h1>
            <label className={classes.label}>Title</label>
            <input type="text" name="title" id="title" placeholder="Enter Title" className={classes.input}></input>
            <br></br>
            <label className={classes.label}>description</label>
            <textarea className={classes.desc} rows='2' name="desc" id="desc" placeholder="Description"></textarea>
            <br></br>
            <label className={classes.label}>Image Link</label>
            <input type="text" name="imglink" id="imglink" placeholder="Enter Image Link" className={classes.input}></input>
            <br></br>
            <label className={classes.label}>Blog Link</label>
            <input type="text" name="bloglink" id="bloglink" placeholder="Enter Blog Link" className={classes.input}></input>
            <br></br>
            <button type="submit" className={classes.button}>Submit</button>
        </form> 
    );
}

}

export default AddBlog;