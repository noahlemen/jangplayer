import React from 'react';

const Player = ({ song }) => {
  const { title, path } = song;

  return (
    <div>
      <h1>{title || path}</h1>
      <audio src={path} controls/>
    </div>
  );
};

Player.propTypes = {
  song: React.PropTypes.shape({
    title: React.PropTypes.string,
    path: React.PropTypes.string.isRequired
  }).isRequired
};

export default Player;
