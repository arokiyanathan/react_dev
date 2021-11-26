import React from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: { min: this.props.value.min, max: this.props.value.max },
      isApply:false
    };
    this.valChange=this.valChange.bind(this);
  }
  valChange(){
    const propVal={min:this.state.value.min,max:this.state.value.max};
    this.props.onChange(propVal);
  }
  render() {

   
    return (
      <div>
        <InputRange
        maxValue={1000}
        minValue={1}
        formatLabel={value => `Rs:${value}`}
        value={this.state.value}
        onChange={value => this.setState({ value })} 
        
        />
        <div className="filter_apply">
        <button 
          className="filter_apply_btn"
          type="button"
          onClick={this.valChange}
        >Apply
        </button>
    </div>
      </div>
    );
  }
}

export default Filter