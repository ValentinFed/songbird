import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import playBird from '../../images/play.svg';
import pauseBird from '../../images/pause.svg';
import classes from './Player.module.scss';

const Player = ({ url }) => {
  const [playing, setPlaying] = useState(false);
  const [played, setPlayed] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const player = useRef(null);
  const [duration, setDuration] = useState(0);
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [seeking, setSeeking] = useState(null);

  const handleTogglePlaying = () => setPlaying((playing) => !playing);
  const handleVolumeChange = (level) => setVolume(parseFloat(level));

  const handleSeekMouseDown = () => {
    setSeeking(true);
  };

  const handleSeekChange = (progress) => setPlayed(parseFloat(progress));

  const handleSeekMouseUp = (progress) => {
    setSeeking(false);
    player.current.seekTo(parseFloat(progress));
  };

  const handleDuration = (duration) => {
    setDuration({ duration });
  };

  const handleProgress = (state) => {
    setPlayed(state.played);
    setPlayedSeconds(state.playedSeconds);

    if (!seeking) {
    //   setPlayed(state.played);
    //   setPlayedSeconds(state.playedSeconds);
    }
  };

  return (
    <div className={classes.Player}>
      <ReactPlayer
        className={classes.mainPlayer}
        url={url}
        ref={player}
        playing={playing}
        played={played}
        volume={volume}
        onEnded={() => setPlaying(false)}
        onDuration={(e) => handleDuration(e)}
        onProgress={(e) => handleProgress(e)}
      />

      <div className={classes.play} onClick={() => handleTogglePlaying()}>
        {playing
          ? <img src={pauseBird} alt="" />
          : <img src={playBird} alt="" />}
      </div>

      <div className={classes.songRoad}>
        <input
          type="range"
          min={0}
          max={0.999999}
          step="any"
          value={played}
          onMouseDown={() => handleSeekMouseDown()}
          onChange={(e) => handleSeekChange(e.target.value)}
          onMouseUp={(e) => handleSeekMouseUp(e.target.value)}
        />
        <p>
          <span>{playedSeconds}</span>
          <span>{duration.duration}</span>
        </p>
      </div>
      <input
        className={classes.volume}
        type="range"
        min={0}
        max={1}
        step="any"
        onChange={(e) => handleVolumeChange(e.target.value)}
      />
    </div>
  );
};

export default Player;
