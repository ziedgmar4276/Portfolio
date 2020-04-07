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
        {/* react project 1*/}
        <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
          <CardTitle style={{color:'#fff',height :'176px',background:'url(https://reactjs.org/logo-og.png) center /cover'}}>REACT PROJECT #1</CardTitle>
          <CardText>
            is  simply  summy  text  of javascript your friend zied
          </CardText>
          <CardActions border>
            <Button  href=""colored >GiTHUB</Button>
            <Button colored >codepen</Button>
            <Button colored >live DEMO</Button>
          </CardActions>
          <CardMenu style ={{color :'#fff'}}>
            <IconButton name="share"/>
          </CardMenu>
        </Card> 
        {/*react project 2*/}
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
         {/* react project 3*/}
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
        <div className="project-grid">
        {/* angular project 1*/}
        <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
          <CardTitle style={{color:'#fff',height :'176px',background:'url(https://danielpdev.io/static/6ab252086c1cfdea4bb9db06c5fa3305/66c07/preview.png) center /cover'}}>REACT PROJECT #1</CardTitle>
          <CardText>
            is  simply  summy  text  of javascript your friend zied
          </CardText>
          <CardActions border>
            <Button  href=""colored >GiTHUB</Button>
            <Button colored >codepen</Button>
            <Button colored >live DEMO</Button>
          </CardActions>
          <CardMenu style ={{color :'#fff'}}>
            <IconButton name="share"/>
          </CardMenu>
        </Card> 
        {/*angular project 2*/}
        <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
          <CardTitle style={{color:'#fff',height :'176px',background:'url(https://danielpdev.io/static/6ab252086c1cfdea4bb9db06c5fa3305/66c07/preview.png) center /cover'}}>REACT PROJECT #2</CardTitle>
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
         {/* angular project 3*/}
         <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
         <CardTitle style={{color:'#fff',height :'176px',background:'url(https://danielpdev.io/static/6ab252086c1cfdea4bb9db06c5fa3305/66c07/preview.png) center /cover'}}>REACT PROJECT #3</CardTitle>
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
    }else if(this.state.activeTab ===2){
      return (
        <div className="project-grid">
        {/* node js project 1*/}
        <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
          <CardTitle style={{color:'#fff',height :'176px',background:'url(https://pngimage.net/wp-content/uploads/2018/06/node-js-logo-png-5.png) center /cover'}}>REACT PROJECT #1</CardTitle>
          <CardText>
            is  simply  summy  text  of javascript your friend zied
          </CardText>
          <CardActions border>
            <Button  href=""colored >GiTHUB</Button>
            <Button colored >codepen</Button>
            <Button colored >live DEMO</Button>
          </CardActions>
          <CardMenu style ={{color :'#fff'}}>
            <IconButton name="share"/>
          </CardMenu>
        </Card> 
        {/*node js project 2*/}
        <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
          <CardTitle style={{color:'#fff',height :'176px',background:'url(https://pngimage.net/wp-content/uploads/2018/06/node-js-logo-png-5.png) center /cover'}}>REACT PROJECT #2</CardTitle>
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
         {/* node js project 3*/}
         <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
         <CardTitle style={{color:'#fff',height :'176px',background:'url(https://pngimage.net/wp-content/uploads/2018/06/node-js-logo-png-5.png) center /cover'}}>REACT PROJECT #3</CardTitle>
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
    }else if(this.state.activeTab ===3){
      return (
        <div className="project-grid">
        {/* mongo project 1*/}
        <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
          <CardTitle style={{color:'#fff',height :'176px',background:'url(https://www.codeplusinfo.com/wp-content/uploads/2020/02/MongoDB-logo.png) center /cover'}}>REACT PROJECT #1</CardTitle>
          <CardText>
            is  simply  summy  text  of javascript your friend zied
          </CardText>
          <CardActions border>
            <Button  href=""colored >GiTHUB</Button>
            <Button colored >codepen</Button>
            <Button colored >live DEMO</Button>
          </CardActions>
          <CardMenu style ={{color :'#fff'}}>
            <IconButton name="share"/>
          </CardMenu>
        </Card> 
        {/* mongo db project 2*/}
        <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
          <CardTitle style={{color:'#fff',height :'176px',background:'url(https://www.codeplusinfo.com/wp-content/uploads/2020/02/MongoDB-logo.png) center /cover'}}>REACT PROJECT #2</CardTitle>
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
         {/* monog  db project 3*/}
         <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
         <CardTitle style={{color:'#fff',height :'176px',background:'url(https://www.codeplusinfo.com/wp-content/uploads/2020/02/MongoDB-logo.png) center /cover'}}>REACT PROJECT #3</CardTitle>
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
