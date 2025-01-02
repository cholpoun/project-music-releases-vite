import React from 'react';
import data from './data.json';
import './index.css';
import dotsIcon from './assets/icons/dots.svg';
import heartIcon from './assets/icons/heart.svg';
import playIcon from './assets/icons/play.svg';

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
            <div className="album-cover-container">
              <img
                src={album.images[1]?.url}
                alt={`${album.name} cover`}
                className="album-cover"
              />
              <div className="hover-overlay">
                <button className="icon-button favorite-button">
                  <img src={heartIcon} alt="Favorite" />
                </button>
                <button className="icon-button play-button">
                  <img src={playIcon} alt="Play" />
                </button>
                <button className="icon-button options-button">
                  <img src={dotsIcon} alt="Options" />
                </button>
              </div>
            </div>
            <a
              href={album.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="album-title"
            >
              {album.name}
            </a>
            <p className="artist-names">
              {album.artists.map((artist, index) => (
                <React.Fragment key={artist.id}>
                  <a
                    href={artist.external_urls.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="artist-link"
                  >
                    {artist.name}
                  </a>
                  {index < album.artists.length - 2
                    ? ", "
                    : index === album.artists.length - 2
                    ? " & "
                    : ""}
                </React.Fragment>
              ))}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
};
