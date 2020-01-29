import React from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: { min: 100, max: 10000 },
      isApply:false
    };
  }
 
  render() {

   function ApplyFliter(){
     }
    return (
      <div>
        <InputRange
        maxValue={10000}
        minValue={100}
        formatLabel={value => `Rs:${value}`}
        value={this.state.value}
        onChange={value => this.setState({ value })} 
        
        />
        <div className="filter_apply">
        <button
          className="filter_apply_btn"
          type="button"
          onClick={ApplyFliter()}
        >Apply
        </button>
    </div>
      </div>
    );
  }
}

export default Filter