import React from 'react';
import Principle from './Principle.js'
export default class PrinciplesList extends React.Component {

  render() {
      let principles = this.props.list;
    return (
      <ul>
        {
          principles.map((principle) => {
            return <li key={principle.id} ><Principle text={principle.text} /></li>
          })
        }
      </ul>
    );

  }

}
