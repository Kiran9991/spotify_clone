import React from 'react'

import spotify_white_logo from '../assets/Spotify_white_color_logo.png';
import IconText from '../components/IconText';


export default function HomeComponent() {
  return (
    <div className='h-full w-full flex'>

      <div className='h-full w-1/5 bg-black'>

        <div className='spotifyLogo
        p-6
        '
        >
          <img src={spotify_white_logo}
          className=''
          alt='spotify_logo' width={130} />
        </div>

        <div>
          <IconText 
              iconName={'ant-design:home-filled'}
              displayText={'Home'}
              active
          />
          <IconText 
              iconName={'meteor-icons:search'}
              displayText={'Search'}
              
          />
          <IconText 
              iconName={'mdi:bookshelf'}
              displayText={'Library'}
              
          />
        </div>
      </div>
      
      <div className='h-full'>
        left side of spotify clone
      
      </div>

    </div>
  )
}
