import React from "react";
import useMusicPlayer from "../hooks/usePlayerProvider";

function Header() {
  const { currentTrackName } = useMusicPlayer();
  return (
    <div className="header">
      <p className="song">{currentTrackName}</p>
    </div>
  );
}

export default Header;
