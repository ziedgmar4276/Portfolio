import React,{ Component } from 'react';
import{Tab ,Tabs, Grid,Cell,Card,CardActions,Button,CardMenu,IconButton,CardText,CardTitle} from  'react-mdl';
        
class Project extends Component{
  constructor (props){
    super(props);
    this.state ={activeTab:0};

  }
  toggleCategories(){
    if(this.state.activeTab === 0){
      return (
        <div className="project-grid">
        {/*project 1*/}
        <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
          <CardTitle style={{color:'#fff',height :'176px',background:'url(https://reactjs.org/logo-og.png) center /cover'}}>REACT PROJECT #1</CardTitle>
          <CardText>
            is  simply  summy  text  of javascript your friend zied
          </CardText>
          <CardActions border>
            <Button colored >GiTHUB</Button>
            <Button colored >codepen</Button>
            <Button colored >live DEMO</Button>
          </CardActions>
          <CardMenu style ={{color :'#fff'}}>
            <IconButton name="share"/>
          </CardMenu>
        </Card> 
        {/*project 2*/}
        <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
          <CardTitle style={{color:'#fff',height :'176px',background:'url(https://reactjs.org/logo-og.png) center /cover'}}>REACT PROJECT #2</CardTitle>
          <CardText>
            is  simply  summy  text  of javascript your friend zied
          </CardText>
          <CardActions border>
            <Button colored >GiTHUB</Button>
            <Button colored >codepen</Button>
            <Button colored >live DEMO</Button>
          </CardActions>
          <CardMenu style ={{color :'#fff'}}>
            <IconButton name="share"/>
          </CardMenu>
        </Card>
         {/*project 3*/}
         <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
         <CardTitle style={{color:'#fff',height :'176px',background:'url(https://reactjs.org/logo-og.png) center /cover'}}>REACT PROJECT #3</CardTitle>
         <CardText>
           is  simply  summy  text  of javascript your friend zied
         </CardText>
         <CardActions border>
           <Button colored >GiTHUB</Button>
           <Button colored >codepen</Button>
           <Button colored >live DEMO</Button>
         </CardActions>
         <CardMenu style ={{color :'#fff'}}>
           <IconButton name="share"/>
         </CardMenu>
       </Card>
       </div>
      )
    } else if(this.state.activeTab ===1){
      return (
        <div><h1>this is Angular  </h1></div>
      )
    }else if(this.state.activeTab ===2){
      return (
        <div><h1>this is Node JS </h1></div>
      )
    }else if(this.state.activeTab ===3){
      return (
        <div><h1>this is MongoDB </h1></div>
      )
    }
  }
    render(){

        return(

          <div className="category-tabs">
            <Tabs activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({activeTab:tabId})}ripple>
               <Tab>React</Tab>
               <Tab>Angular</Tab>
               <Tab>Node js</Tab>
               <Tab>MongoDB</Tab>

            </Tabs>
            <section className ="project-grid">
              <Grid >
                <Cell col={12}>
                  <div className="cantent">
              {this.toggleCategories()}
              </div>
              </Cell>
              </Grid>
            </section>
          </div>

        );
    }
}
export default Project;
