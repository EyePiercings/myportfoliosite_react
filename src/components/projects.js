import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0};
  }

  /**
   * This method will be used to display a project for each tab.
   */
  toggleCategories() {
    if(this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle 
            style={
              { color: '#fff', 
                height: '176px', 
                background: 'url(https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-512.png) center / cover'
              }  
                  }
          >
          React Project
          </CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis fermentum tempus.
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>CodePen</Button>
            <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle 
            style={
              { color: '#fff', 
                height: '176px', 
                background: 'url(https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-512.png) center / cover'
              }  
                  }
          >
          React Project
          </CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis fermentum tempus.
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>CodePen</Button>
            <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        </div>
      );
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>This is Java.</h1></div>
      );
    }

  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
        {/* In react-mdl, a Tab is numbered from 0 to n and can be identified by its index */}  
          <Tab>React</Tab>
          <Tab>Java</Tab>
        </Tabs>
        
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;