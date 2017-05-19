import React, {Component} from 'react'
//Class responsible for managing the filters input
class Filter extends Component{
    constructor(props){
        super(props);
        this.state = {gender : null,
                      height : null,
                      mass : null
        };
    }
    render(){
        return(
        <div className="filters">
            <input 
            value = {this.state.gender}
            defaultValue = {"genero"}
            onChange={event => this.onGenderInputChange(event.target.value)} />
            <input 
            value = {this.state.height}
            defaultValue = {"altura"}
            onChange={event => this.onHeightInputChange(event.target.value)} />
            <input 
            value = {this.state.mass}
            defaultValue = {"massa"}
            onChange={event => this.onMassInputChange(event.target.value)} />
        </div>
        );
    }

    onFilterInputChange(){
        this.props.onFilterChange(this.state);
    }

    onGenderInputChange(gender) {
        this.setState({gender}, this.onFilterInputChange);
    }
    onHeightInputChange(height) {
        this.setState({height}, this.onFilterInputChange);
    }
    onMassInputChange(mass) {
        this.setState({mass}, this.onFilterInputChange);
    }
}

export default Filter;