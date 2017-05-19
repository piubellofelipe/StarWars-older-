import React, {Component} from 'react';
//class responsible for the searching bar, and managing it's content
class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {term: ''};
    }
    render(){
        return(
        <div className="search-bar">
            <input 
            value = {this.state.term}
            defaultValue = {"Search for a character name"}
            onChange={event => this.onInputChange(event.target.value)} />
        </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchCharacterChange({term});
    }
}

export default SearchBar;