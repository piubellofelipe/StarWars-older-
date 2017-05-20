import React, {Component} from 'react';
//class responsible for the searching bar, and managing it's content
class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {term: ''};
        this.onSearch = this.onSearch.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }
    render(){
        return(
        <div className="search-bar">
            <input 
            value = {this.state.term}
            onChange={event => this.onInputChange(event.target.value)} />
            <button className = "search-button" onClick = {this.onSearch}> REALIZAR PESQUISA</button>
        </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
    }
    onSearch(){
        this.props.onSearch(this.state.term);
    }

}

export default SearchBar;