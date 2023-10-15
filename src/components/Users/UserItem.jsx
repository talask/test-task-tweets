import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ImgAvatar } from './Users.styled';



export const UserItem = ({ name, avatar, tweets,followers, id, fnFollower}) => {

    const follower = localStorage.getItem('followers');
    const followerArr = JSON.parse(follower) || []; 
    const isFollow = followerArr.includes(id);
   

    return (
            
        <ListItem> 
            <ImgAvatar src={avatar} alt={name} />
            <p>{tweets} tweets</p>
            <p>Followers: {followers}</p>
            <button type='button' onClick={() => {fnFollower(id, followers)}}>
                {isFollow ? 'Following' : 'Followers'}
            </button>
        </ListItem>
        
    )
}

UserItem.propTypes = {
   
    name: PropTypes.string, 
    avatar: PropTypes.string, 
    tweets: PropTypes.number,
    followers: PropTypes.number,
    fnDelete: PropTypes.func,
}