import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img 
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt='avatar'
                style={{height: '200px'}}
              />
            </div>

            <h2 style={{paddingTop: '2em'}}>Desmond Shawareb</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie felis ac commodo accumsan. Fusce euismod odio nisi, eget volutpat libero commodo sed. Pellentesque imperdiet mauris sit amet turpis congue interdum. Integer auctor rutrum gravida. Praesent lorem augue, venenatis et enim id, congue pharetra augue. Curabitur at ornare orci.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
            <h5>Address</h5>
            <p>1 Hacker Way Menlo Park, 94025</p>
            <h5>Phone</h5>
            <p>(123) 456-7890</p>
            <h5>Email</h5>
            <p>someone@example.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education 
              startYear={2010}
              endYear={2014}
              schoolName="The Lawrenceville School"
              schoolDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie felis ac commodo accumsan. Fusce euismod odio nisi, eget volutpat libero commodo sed."
            />

            <Education 
              startYear={2014}
              endYear={2018}
              schoolName="Williams College"
              schoolDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie felis ac commodo accumsan. Fusce euismod odio nisi, eget volutpat libero commodo sed."
            />

            <hr style={{borderTOp: '3px solid #e22947' }} />

            <h2>Experience</h2>
            <Experience 
              startYear = {2013}
              endYear = {2013}
              jobName = "JP Morgan"
              jobDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie felis ac commodo accumsan. Fusce euismod odio nisi, eget volutpat libero commodo sed."
            />

            <Experience 
              startYear = {2015}
              endYear = {2015}
              jobName = "Kickstarter"
              jobDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie felis ac commodo accumsan. Fusce euismod odio nisi, eget volutpat libero commodo sed."
            />
            
            <hr style={{borderTOp: '3px solid #e22947' }} />

            <h2>Skills</h2>
            <Skills 
              skill='javascript'
              progress={70}
            />
            <Skills 
              skill='HTML/CSS'
              progress={70}
            />
            <Skills 
              skill='React'
              progress={40}
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;