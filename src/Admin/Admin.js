import React, { Component } from 'react';
import classes from './Admin.css';
import Button from "@material-ui/core/Button";
import {Link, Route} from 'react-router-dom';

class Admin extends Component {
 state = { 
     cards : [] 
 }
 
 constructor(props) {
     super(props);
     this.state.cards = [...this.props.cards];
 }

 viewFormHandler(index) {
     const card = this.state.cards[index];
 }

 deleteHandler(index) { 
     let cards = [...this.state.cards];
     cards.splice(index,1);
     this.setState({ cards:cards });
     this.props.click(index);
 }

 render() {
     let rowCards = (this.state.cards.map((card, index)=> {
        return <tr key = {card.id}>
                   <td>{card.id}</td>
                   <td>{card.title}</td>
                   <td>{card.desc}</td>
                   <td className={classes.buttons}>
                      <Link to={'Admin/Blogs/FullBlog'+card.id}><button className={classes.button}>edit</button></Link>
                      <Button variant="contained" color="secondary" onClick={()=>this.deleteHandler(index)}>delete</Button>
                   </td>
               </tr>
     })
    )

    return (
        <div className={classes.list}>
            <Link to="/Admin/Blogs/newBlog">
                <button className={classes.button}>Add Blog</button>
            </Link>
            <table className={classes.table}>
                <tbody>
                    <tr>
                        <th width="50px">Id</th>
                        <th width="400px">Title</th>
                        <th width="800px">Description</th>
                        <th width="150px">Actions</th>
                    </tr>
                    {
                        rowCards
                    }
                </tbody>
            </table>
        </div>
    );
}
}

export default Admin;