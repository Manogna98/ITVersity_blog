import React, { Component } from 'react';
import classes from './AddBlog.css';

class EditBlog extends Component {
       state={ 
           ImgMediaCard: {
            title: " ",
            desc: " ",
            imglink: " ",
            bloglink: " "
        }
    }

    constructor(props) {
        super(props);
        let cards=[...this.props.cards];
        this.state.ImgMediaCard = cards.filter((cardtemp)=>cardtemp.id===this.props.id)[0]
        console.log("Edit form state",this.state.ImgMediaCard);
        
    }

    editSubmitHandler=(event,id)=> {
        event.preventDefault();
        const new_card = {
            title: '',
            desc: '',
            imglink: '',
            bloglink: ''
        }
        new_card.title=event.target.title.value;
        new_card.desc=event.target.desc.value;
        new_card.imglink=event.target.imglink.value;
        new_card.bloglink=event.target.bloglink.value;
        console.log(new_card)
        this.props.click(new_card, this.props.id);
    }

    render() {
        return (
            <form onSubmit={this.editSubmitHandler} className={classes.form}>
                <h1 className={classes.h1}>Edit Blog</h1>
                <label className={classes.label}>Title</label>
                <input type="text" name="title" id="title"  defaultValue={this.state.ImgMediaCard.title}  className={classes.input} />
                <br />
                <label className={classes.label}>Description</label>
                <textarea className={classes.desc} rows="2" name="desc" id="desc" defaultValue={this.state.ImgMediaCard.desc}  />
                <br />
                <label className={classes.label}>Image Link</label>
                <input type="text" name="imglink" id="imglink"  defaultValue={this.state.ImgMediaCard.imglink} className={classes.input} />
                <br />
                <label className={classes.label}>Blog Link</label>
                <input type="text" name="bloglink" id="bloglink"  defaultValue={this.state.ImgMediaCard.bloglink} className={classes.input} />
                <br />
                <button type="submit" className={classes.button}>Submit</button>
            </form>
        );
    }
}

export default EditBlog;
