import React from 'react';
import './Detail.css';

class Detail extends React.Component{
    
    componentDidMount(){
        const {location, history} = this.props;

        if (location.state === undefined){
            history.push('/');
        }
    }
    render(){
        const {location} = this.props;
        
        if(location.state){
            function star1(){
                var num = location.state.rating;
                return document.write("☆" * num);
            }
            return (
                <div className="movie">
                <img src={location.state.poster} alt={location.state.title}></img>
                    <div className="movie-data">
                        <h1 className="movie-title">{location.state.title}</h1>
                        <h3 className="movie-year">{location.state.year} / {location.state.rating}{star1}</h3>
                        <h3 className="movie-summary">{location.state.summary}</h3>
                        <h3 className="movie-genres">{location.state.genres}</h3>
                    </div>
                </div>
            );
        }else{
            return null;
        }
    }
}

//{"☆"*(parseInt)(location.state.rating/2+1)}
export default Detail;