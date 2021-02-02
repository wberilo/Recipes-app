import React from 'react';
import propTypes from 'prop-types';
import YouTube from 'react-youtube';
import Card from 'react-bootstrap/Card';
import '../pages/RecipeDetails.css';

function RecipeVideo({ videoString }) {
  const index = videoString.indexOf('=');
  const start = index + 1;
  const videoId = videoString.slice(start, videoString.length);

  return (
    <div>
      <Card.Subtitle
        className="instructions-title"
      >
        <strong>
          Video
        </strong>
      </Card.Subtitle>
      <Card data-testid="video">
        <YouTube
          videoId={ videoId }
          opts={ {
            width: '100%',
            height: '100%',
          } }
        />
      </Card>
    </div>
  );
}

export default RecipeVideo;

RecipeVideo.propTypes = {
  videoString: propTypes.string,
}.isRequired;
