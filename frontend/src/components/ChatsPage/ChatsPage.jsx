import React from 'react'
import ChatsPageCSS from './styles.module.css'
import StartMessagingIcon from '../../assets/images/heroStartChat.png'

export const ChatsPage = () => {
  return (
    <div className={ChatsPageCSS.ChatsPage}>
      <div className={ChatsPageCSS.ChatsHistory}>dfg</div>
      <div className={ChatsPageCSS.RightContainer}>
        <div className={ChatsPageCSS.Image}>
        <img src={StartMessagingIcon} alt="img"></img>
        </div>
        <div className={ChatsPageCSS.Text}>
        <p>Select Chat to start a conversation</p>
        </div> 
      </div>
    </div>
  )
}
