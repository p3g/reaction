import React from 'react';
import Principles from './principle/Principles.js';
export default class OurPrinciples extends React.Component {

  render() {

    return (
      <Principles

        list={[
          {id: 1,text:'People in team should be passionic towords the work they do.'},
          {id: 2,text:'They should not keep boundaries for their skills and learning new languages, frameworks or methodologies.'},
          {id: 3,text:'Be open for other\'s ideas and opinions.'},
          {id: 4,text:'Be helped and be willing to help with code reviews and pair programming'}
      ]}

        heading = {'We follow these principles'}

      />
    );

  }

}
