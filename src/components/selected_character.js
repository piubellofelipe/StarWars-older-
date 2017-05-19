import React, {Component} from 'react'


const selectedCharacter = (props) => {
    const selected = props.selectedCharacter;
    if (!selected) return <div   className = "mainInfo">Bem vindo ao Tudo sobre StarWars! Selecione um personagem para ver suas principais informações!</div>;


    //gather movies info
    const movies= selected.films;
    var moviesList = movies.map( movie => {
        var response = "";
        var req = new XMLHttpRequest();
        req.open('GET', movie, false);
        req.addEventListener('load', function(){
            if (req.status >= 200 && req.status < 400){
                response = JSON.parse(req.responseText);
           } else{
               console.log("Não conseguiu conectar =/");
           }
        });
        req.send(null);
        return response;
    });

    if (props.addInfo != null){
        console.log(props.addInfo);
        return (
            <div   className = "mainInfo">
            <div onClick = { () => props.onAddInfoSelect(null)}> back </div>
            <div>TITULO: {props.addInfo.title}</div>
            <div>DATA DE LANÇAMENTO: {props.addInfo.release_date}</div>
            <div>EPISODIO: {props.addInfo.episode_id}</div>
            <div></div>
            </div>
        );

    }
    //gather movies titles and make the div component
    var moviesListNames = moviesList.map(
        movie => {
            return( <div onClick = {() => props.onAddInfoSelect(movie)}> {movie.title}</div>);
        }
     );
     console.log(moviesListNames);



    return(
        <div   className = "mainInfo">
            <div>
                <div>NOME: {selected.name}</div>
                <div>GÊNERO: {selected.gender}</div>
                <div>COR DOS OLHOS: {selected.eye_color}</div>
                <div>COR DOS CABELOS: {selected.hair_color}</div>
                <div>ALTURA: {selected.height}</div>
                <div>FILMES:
                {moviesListNames}
                </div>
            </div>
        </div>
        );
    };


export default selectedCharacter;