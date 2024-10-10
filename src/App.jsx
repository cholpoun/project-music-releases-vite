import React from 'react';
import data from './data.json';
import './index.css';

export const App = () => {
  if (!data.albums || !data.albums.items || data.albums.items.length === 0) {
    return <p>No albums available.</p>;
  }

  return (
    <div className="albums-container">
      <h1>Albums</h1>
      <div className="albums-list">
        {data.albums.items.map((album) => (
          <article key={album.id} className="album-card">
            <a href={album.external_urls.spotify} target="_blank" rel="noopener noreferrer">
              <div className="album-cover-container">
                <img
                  src={album.images[1]?.url}
                  alt={`${album.name} cover`}
                  className="album-cover"
                />
                <div className="hover-overlay">
                  <button className="favorite-button">❤</button>
                  <button className="play-button">▶</button>
                  <button className="options-button">⋮</button>
                </div>
              </div>
            </a>
            <h2 className="album-title">{album.name}</h2>
            <p className="artist-names">
              {album.artists.map((artist) => (
                <a
                  key={artist.id}
                  href={artist.external_urls.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="artist-link"
                >
                  {artist.name}
                </a>
              ))}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
};