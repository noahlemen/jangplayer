import React from 'react';

const Playlist = ({ playlist, onChange }) => {
  const handleRemoveLastSong = () => {
    const { playlist, onChange } = this.props;

    onChange(playlist.slice(0, playlist.length - 1));
  };

  return (
    <div>
      <h2>{playlist.length}</h2>
      <button onClick={handleRemoveLastSong}>remove last song</button>
    </div>
  );
}

Playlist.propTypes = {
  playlist: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      title: React.PropTypes.string,
      path: React.PropTypes.string.isRequired
    })
  ),
  onChange: React.PropTypes.func
}

export default Playlist;
