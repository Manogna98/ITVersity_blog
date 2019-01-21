import React, { Component } from 'react'; 
import classes from './App.css';
import ImgMediaCard from './Cards/Cards';
import SimpleExpansionPanel from './Expandable/Expandable';
import Footer from './Footer/Footer';
import AboutUs from './Introduction/Introduction';
import { BrowserRouter }  from 'react-router-dom';
import Admin from './Admin/Admin';
import { Route } from 'react-router-dom';
import AddBlog from './AddBlog/AddBlog'; 
import EditBlog from './AddBlog/EditBlog';

class App extends Component {
  state = {
    ImgMediaCard:[{
        imglink:"https://kaizen.itversity.com/wp-content/uploads/2018/11/Continuous-Applications-880x360.png",
        title:"Case Study – Continuous Applications – Spark Structured Streaming",
        desc:"Continuous Applications is new buzzword where enterprises can achieve real time reports with the lowest latency possible. Sarath Varma, Data Engineer at GrubHub is going to share his experience using...",
        bloglink:"https://kaizen.itversity.com/case-study-continuous-applications-spark-structured-streaming/" ,
        id:101
      },{
        imglink:"https://kaizen.itversity.com/wp-content/uploads/2018/04/pythonSpark.jpg",
        title:"Setup Spark Development Environment – PyCharm and Python",
        desc:"Introduction - Setup Python, PyCharm and Spark on Windows As part of this blog post we will see detailed instructions about setting up development environment for Spark and Python using PyCharm IDE...",
        bloglink:"https://kaizen.itversity.com/setup-spark-development-environment-pycharm-and-python/",
        id:102
      },{
        imglink:"https://kaizen.itversity.com/wp-content/uploads/2018/04/scala-spark.png",
        title:"Setup Spark Development Environment – IntelliJ and Scala",
        desc:"As part of this blog post we will see detailed instructions about setting up development environment for Spark and Hadoop application development using Windows. We have used Windows 10 for this...",
        bloglink:"https://kaizen.itversity.com/setup-development-environment-intellij-and-scala-big-data-hadoop-and-spark/",
        id:103
      }],
      editid:0

   }

   constructor(props) {
     super(props);
     this.deleteHandler = this.deleteHandler.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
     this.editHandler = this.editHandler.bind(this);
     this.editSubmitHandler = this.editSubmitHandler.bind(this);

   }

   deleteHandler(index) {
     let cards = [...this.state.ImgMediaCard];
     cards.splice(index,1);
     this.setState({ ImgMediaCard:cards });
   }

   handleSubmit(card_temp) {
     let cards = [...this.state.ImgMediaCard];
     cards.push(card_temp);
     this.setState({ ImgMediaCard:cards });
   }

   editSubmitHandler(ImgMediaCard,id){
    let cards = [...this.state.ImgMediaCard];
    let card_temp = cards.filter((cardtemp)=>cardtemp.id===id)[0]
    let index = cards.indexOf(id);
    card_temp.title=ImgMediaCard.title;
    card_temp.desc=ImgMediaCard.desc;
    card_temp.blogLink=ImgMediaCard.bloglink;
    card_temp.imgLink=ImgMediaCard.imglink;

    cards[index]=card_temp;

    this.setState({ImgMediaCard: cards});

    alert("Form edited Succesfully");
    
  }

   editHandler(index){
    this.state.editid=index;
    console.log(this.state.editid);
   }
  
  render() {
     
    let cards = (
      this.state.ImgMediaCard.map((card)=>{
        return <ImgMediaCard
          imglink={card.imglink}
          title={card.title}
          desc={card.desc}
          bloglink={card.bloglink}
          key={card.id}

          />
      })
    )

    return (
      <BrowserRouter>
      <div className="App" id="top">
        
        <SimpleExpansionPanel lists={this.state.card}/>
        <br></br>
        <br></br>
        <Route path="/" exact render={()=> <AboutUs />}></Route>
        <br></br>
        <br></br>
        <br></br>
    
        <Route path="/" exact render={()=>
          <div className={classes.cards1}>
            {cards}
          </div> }/>

        <Route path="/Admin/Blogs" exact render={()=> <Admin cards={this.state.ImgMediaCard} click={this.deleteHandler} edit={this.editHandler} /> }/>
        <Route path="/Admin/Blogs/newBlog" render={() => <AddBlog click={this.handleSubmit} />} />
        <Route path="/Admin/Blogs/EditBlog/:id" exact render={()=><EditBlog id={this.state.editid}
                cards={this.state.ImgMediaCard} click={this.editSubmitHandler}/>}/>
        
        <Footer />

      </div>
      </BrowserRouter>
    );
  }
}

export default App;
