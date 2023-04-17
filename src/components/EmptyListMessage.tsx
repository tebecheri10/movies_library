import React, { FC } from 'react'
import cinemaIcon from '../assets/cinema-icon.jpg'
import cinemaImage from '../assets/cinema-image.png'


const EmptyListMessage:FC = () => {
  return (
    <div className='emptyLIstMessage_container' data-testid="empty-list-message">
        <img className='emptyLIstMessage_image' src={cinemaImage} alt="empy list message" />
        <h3 className='emptyLIstMessage_text'>Start searching your favorite movies and series</h3>
    </div>
  )
}

export default EmptyListMessage