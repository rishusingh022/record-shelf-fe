import React from 'react';
import prop from 'prop-types';
import './syncScreen.css';
function SyncScreen(props) {
  return (
    <div className="load-song-on-sync">
      <div className="load-song-on-sync-title">
        <p>:((</p>
        <p>seems a bit empty in here...</p>
      </div>
      <div
        onClick={() => props.handleSync()}
        className="load-song-on-sync-button"
      >
        <p>sync</p>
      </div>
    </div>
  );
}

export default SyncScreen;

SyncScreen.propTypes = {
  handleSync: prop.func.isRequired,
};
