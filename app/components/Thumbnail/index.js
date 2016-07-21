import React from 'react';
import './styles.scss';

const LIKE_SVG = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 50 50" enableBackground="new 0 0 50 50">
    <path d="M40 23.2c0-2.1-1.7-3.2-4-3.2h-6.7c.5-1.8.7-3.5.7-5 0-5.8-1.6-7-3-7-.9 0-1.6.1-2.5.6-.3.2-.4.4-.5.7l-1 5.4c-1.1 2.8-3.8 5.3-6 7V36c.8 0 1.6.4 2.6.9 1.1.5 2.2 1.1 3.4 1.1h9.5c2 0 3.5-1.6 3.5-3 0-.3 0-.5-.1-.7 1.2-.5 2.1-1.5 2.1-2.8 0-.6-.1-1.1-.3-1.6.8-.5 1.5-1.4 1.5-2.4 0-.6-.3-1.2-.6-1.7.8-.6 1.4-1.6 1.4-2.6zm-2.1 0c0 1.3-1.3 1.4-1.5 2-.2.7.8.9.8 2.1 0 1.2-1.5 1.2-1.7 1.9-.2.8.5 1 .5 2.2v.2c-.2 1-1.7 1.1-2 1.5-.3.5 0 .7 0 1.8 0 .6-.7 1-1.5 1H23c-.8 0-1.6-.4-2.6-.9-.8-.4-1.6-.8-2.4-1V23.5c2.5-1.9 5.7-4.7 6.9-8.2v-.2l.9-5c.4-.1.7-.1 1.2-.1.2 0 1 1.2 1 5 0 1.5-.3 3.1-.8 5H27c-.6 0-1 .4-1 1s.4 1 1 1h9c1 0 1.9.5 1.9 1.2z"/>
    <path d="M16 38h-6c-1.1 0-2-.9-2-2V22c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2zm-6-16v14h6V22h-6z"/>
  </svg>
);

const PLAY_SVG = (
  <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 510 510">
    <g id="play-circle-outline">
      <path d="M204,369.75L357,255L204,140.25V369.75z M255,0C114.75,0,0,114.75,0,255s114.75,255,255,255s255-114.75,255-255    S395.25,0,255,0z M255,459c-112.2,0-204-91.8-204-204S142.8,51,255,51s204,91.8,204,204S367.2,459,255,459z" fill="#FFFFFF"/>
    </g>
  </svg>
);

const Thumbnail = (props) => {
  let title = props.title;

  if (!title) {
    return null;
  }

  let series = null;
  let episode = null;
  let season = null;
  let duration = null;
  let episodeInfo = null;
  let playButton = null;

  let name = title.title;
  let likes = title.fivestar.up_count.value;
  let ribbonText = title.is_new ? 'new' : null;

  // episodic type
  if (title.product_type === 'episodic') {
    episodeInfo = <div className="Thumbnail__meta">{title.total_seasons} seasons, {title.total_episodes} episodes</div>;
    ribbonText = ribbonText || 'series';
  }

  // episode type
  if (title.product_type === 'episode') {
    series = <em className="Thumbnail__meta">{title.series.title}</em>;

    // get minutes from seconds
    duration = Math.ceil(title.feature.duration / 60) % 60 || null;

    episode = title.fields.episode[0].value;
    season = title.fields.season[0].value;

    episodeInfo = episode && season ? (
      <div className="Thumbnail__meta">Season {season}, Episode {episode}</div>
    ) : null;
  }

  // video type
  if (title.type === 'product_video') {
    playButton = <span className="Thumbnail__play">{PLAY_SVG}</span>;
    duration = Math.ceil(title.feature.duration / 60) % 60 || null;
  }

  let episodeDuration = duration ? (
    <div className="Thumbnail__meta">{duration} {duration === 1 ? 'min' : 'mins'}</div>
  ) : null;

  let ribbon = ribbonText ? (
    <div className="Thumbnail__ribbon">{ribbonText}</div>
  ) : null;

  return (
    <div className="col-sm-3 col-xs-6">
      <div className="Thumbnail">
        <a className="Thumbnail__image-wrapper" href="#">
          {ribbon}
          {playButton}
          <img src={title.keyart_16x9_withtext.keyart_864x486} />
        </a>
        <div className="Thumbnail__caption">
          <div className="Thumbnail__like">
            {LIKE_SVG}
            <span>{likes}</span>
          </div>
          {series}
          <a href="#" className="Thumbnail__title">{name}</a>
          {episodeInfo}
          {episodeDuration}
        </div>
        <a href="#" className="Thumbnail__more">More</a>
      </div>
    </div>
  )
};

export default Thumbnail;
