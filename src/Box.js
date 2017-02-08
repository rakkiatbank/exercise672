import React , {Component,PropTypes} from 'react';
import './bulma.css';
import {SubBox} from './SubBox.js';

export class Box extends Component {

    state={
      ValueState:''
    }

    HandleValue=(event)=>{
      this.setState({ValueState:event.target.value});
    }

    render(){

      var BoxArray=[];

      for (var i = 1; i <= this.state.ValueState; i++) {
        BoxArray.push(
          <div className="column notification is-warning has-text-centered is-grid">
          Select Sub-box Number
          <SubBox/>
          </div>
          );
      }

      return(
        <div>
        <span className="card-content">
            <center>
              <span className="select" onChange={this.HandleValue} value={this.state.ValueState}>
                  <select>
                    <option value="0">select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
              </span>
            </center>
        </span> 

        <span className="card-content">
        <div className="columns is-large">
        {BoxArray}
        </div>
        </span>
          
        </div>
      );
    }

}
