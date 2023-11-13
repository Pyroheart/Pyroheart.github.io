import React from 'react'
import { useRef } from 'react';
import './profiletile.css'


export default function ProfileTile({ title, asset, onPressTile }) {
    const tabIndex = useRef(0);
  
    return (
      <div className='profile-main' tabIndex={tabIndex.current++}>
        <img
          onClick={() => onPressTile({ title, asset })}
          className='profile-tile'
          aria-label={"profile" + title}
          src={asset}
          alt="profile pic"
        />
        <div className='display-name'>{title}</div>
      </div>
    );
  }