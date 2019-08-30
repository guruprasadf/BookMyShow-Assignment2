import React from "react";
import "../assets/styles/movie-preview.css";

class Preview extends React.Component {
  componentDidMount(){
    this.setView();
  }
  componentDidUpdate(prevProps){console.log(this.props.movie)
    this.setView();
  }

  setView=()=>{
    setTimeout(() => {
      window.scroll({
        top: document.getElementsByClassName("preview")[0].offsetTop-50,
        behavior: "smooth"
      });
    }, 400)
  }
  render() {
    return (
      <div className="preview" style={{height:'430px',opacity:'1'}}>
      <div className="preview-container">
        <div className="trailer">
          <iframe
            title="some"
            src={`https://www.youtube.com/embed/${
            this.props.movie.TrailerURL.split("=")[1].split("&")[0]
          }`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="meta-data">
          <h3>{this.props.movie.EventTitle}</h3>
          <p className="language">{this.props.movie.EventLanguage}</p>
          <div className="badges">
            {this.props.movie.EventGenre.split("|").map(genre => (
              <span key={genre}>{genre}</span>
            ))}
          </div>
          <div className="ratings">
            <div>
              <i className="fas fa-thumbs-up" />
            </div>
            <div className="rating-text">
              {this.props.movie.wtsPerc} % <br />
              <span className="muted">{this.props.movie.totalVotes} Votes</span>
            </div>
            <div>
              <i className="fas fa-calendar-alt" />
            </div>
            <div className="rating-text">
              {this.props.movie.ShowDate.split(",")[0]} <br />
              <span className="muted">
                {this.props.movie.ShowDate.split(",")[1]}
              </span>
            </div>
          </div>
          <p className="synopsis">
          Paramount is an American film studio based in Hollywood, California, that has been a subsidiary of the American media conglomerate Viacom since 1994. Paramount is the fifth oldest surviving film studio in the world,[1] the second oldest in the United States, and the sole member of the 
          "Big Five" film studios still located in the Los Angeles neighborhood of Hollywood.
          </p>
         
          <div className="watch-section">
            <div className="will-watch">
              <i className="fas fa-thumbs-up" />
              <p>Will Watch</p>
              <p>({this.props.movie.wtsCount})</p>
            </div>
            <div className="maybe">
              <i className="fas fa-question" />
              <p>Maybe</p>
              <p>({this.props.movie.maybeCount})</p>
            </div>
            <div className="wont-watch">
              <i className="fas fa-thumbs-down" />
              <p>Dont Watch</p>
              <p>({this.props.movie.dwtsCount})</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Preview;
