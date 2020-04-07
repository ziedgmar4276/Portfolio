import React,{ Component } from 'react';
import {Grid, Cell,List,ListItem,ListItemContent} from 'react-mdl';

        
class Contact extends Component{
    render(){

        return(

          <div className="contact-body">
            <Grid className="contact-grid">
              <Cell col={6}>
              <h2> zied gmar</h2>
              <img style={{height:'250px'}} alt ="img"src ="data:image/jpeg;base64,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"/>
               <p style={{width:'75%',margin :'auto',paddingTop:'1 em'}}>
                 je suit zied gmar En informatique, un développeur ou analyste programmeur est un informaticien qui réalise des logiciels et les met en œuvre à l'aide de langages de programmation. Sommaire. 1 Terminologie; 2 Aspects du travail; 3 Formations et perspectives en France ... bienfaisance régie par le paragraphe 501(c)(3) du code fiscal des États-Unis.
               </p>
               </Cell>
               <Cell col={6}>
                 <h2>Contact me</h2>
               <hr/>
               <div className="contact-list">
               <List>
                 <ListItem>
                   <ListItemContent icon="person">Bryan Cranston</ListItemContent>
                 </ListItem>
                 <ListItem>
                   <ListItemContent icon="person">Aaron Paul</ListItemContent>
                 </ListItem>
                 <ListItem>
                  <ListItemContent icon="person">Bob Odenkirk</ListItemContent>
                 </ListItem>
                </List>

              
                </div>
               </Cell>

            </Grid>
          

          </div>
        
        

        );
    }
}
export default Contact;
