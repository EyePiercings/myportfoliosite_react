import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Desmond Shawareb</h2>
            <img
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar"
              style={{ height: '300px' }}
            />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie felis ac commodo accumsan. Fusce euismod odio nisi, eget volutpat libero commodo sed.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
              <List>
              <ListItem>
                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                  <i className="fa fa-phone-square" aria-hidden="true" />
                    (917) 421-0248
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                  <i className="fa fa-envelope" aria-hidden="true" />
                    do.shawareb@gmail.com
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                  <i className="fa fa-github" aria-hidden="true" />
                   www.github.com/EyePiercings
                </ListItemContent>
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