import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CharacterList from './components/character_list';
import SelectedCharacter from './components/selected_character'
import PageSelector from './components/page_selector'
import SearchBar from './components/search_bar'
import _ from 'lodash'


const url_SWAPI = 'https://swapi.co/api/people/'
const req = new XMLHttpRequest();


class App extends Component{
    constructor(props){
        super(props);

        var response = (this.loadCharacters(1));
        this.state = {
             page : 1,
             characters: response,
             selectedCharacter : null,
             addInfo : null
        };        
    }

    loadCharacters(page){
        var response = "";
        req.open('GET', url_SWAPI+'?page='+page, false);
        req.addEventListener('load', function(){
            if (req.status >= 200 && req.status < 400){
                response = JSON.parse(req.responseText);
           } else{
               console.log("Não conseguiu conectar =/");
           }
        });
        req.send(null);   
        return response.results;  
    }

    characterSearch(term){
        var url = 'https://swapi.co/api/people/?search=';
        var response = "";
        req.open('GET', url+term.term, false);
        req.addEventListener('load', function(){
            if (req.status >= 200 && req.status < 400){
                response = JSON.parse(req.responseText);
            } else{
                console.log("Falha na pesquisa");
            }
        });
        req.send(null);
        this.setState({characters : response.results});
        return response;
    }

    render() {
        const characterSearch = _.debounce((term) => this.characterSearch(term), 300);
        return(
            <div className = "app">
                <SearchBar onSearchCharacterChange={characterSearch}/>
                <SelectedCharacter   
                    onAddInfoSelect = { addInfo => {this.setState({addInfo});}}
                    selectedCharacter = {this.state.selectedCharacter}
                    addInfo = {this.state.addInfo}
                />
                <CharacterList
                        onCharacterSelect = {selectedCharacter => {
                                                this.setState({selectedCharacter});
                                                this.setState({addInfo : null});
                                                }
                                            }
                        characters={this.state.characters}/>
                <PageSelector
                    onPageSelect = {page => {
                                        this.setState({page});
                                        this.setState({characters : this.loadCharacters(page)});}
                                   }
                    page = {this.state.page}
                />    
                
            </div>
        );
    }
}
ReactDOM.render(<App />, document.querySelector('.container'));