import React, { Component } from 'react'
import axios from 'axios';

export default class CounterComponent extends Component {
  render() {
    const {count}=this.props;
    return (
      <>
        <div class={` ${count<0?"bg-red-100":"bg-green-100"} rounded-xl p-8 md:p-0  mt-3`}>
        <div class="pt-6 md:p-8 text-center space-y-4">
       
            <p class="text-lg text-center font-medium">
              Counter:<span className="text-sky-300 text-2xl text-center">    {count}</span>
            </p>
        
          <div >
        
            <div class="text-slate-400 text-xs">
              Use button to increase or decrease the count.
            </div>
           
          </div>
        </div>
      </div>

      </>
    )
  }
}
