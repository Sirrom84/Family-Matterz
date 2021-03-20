import React from 'react';
import './Loading.scss';
import FastfoodIcon from '@material-ui/icons/Fastfood';
export const Loading = () => {
  return (
    <div>
      <div class='no-freeze-spinner'>
        <div id='no-freeze-spinner'>
          <div>
            <i class='material-icons'>
              <FastfoodIcon />
            </i>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
