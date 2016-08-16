import React from 'react';
import PrinciplesList from './PrinciplesList.js';
export default class Principles extends React.Component {

  render() {
    let principles = this.divideList(this.props.list);
    return (
      <div className='row' >
        <div className='col s12' >
          <h3 className='header center shadow orange-text' >
            { this.props.heading || 'We follow these principles' }
          </h3>
        </div>
        <div className='col s6' >
          <PrinciplesList list={principles[0]} />
        </div>
        <div className='col s6' >
          <PrinciplesList list={principles[1]} />
        </div>
      </div>
    );

  }

  divideList(list) {
    let list1 = list.slice(0);
    let list2 = list1.splice(0,Math.floor(list1.length/2));
    return [list2,list1];
  }

}
