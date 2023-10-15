import React from 'react';
import { UserItem } from './UserItem';
import { LoadMore } from '../LoadMore/LoadMore';
import { useDispatch } from "react-redux";
import { incrementPage } from '../../redux/usersSlice'
import { useUser } from '../../redux/hooks/useUser';
import { toggleFollower } from '../../helpers'
import { updateUser } from '../../redux/operation';
import { List } from './Users.styled';




export const Users = () => {
        
    const { users, isLoaded } = useUser();
    
   
    const dispatch = useDispatch();
    
    const fnFollower = (id, followers) => {
        const count = toggleFollower(id)
        
        const newFollowers = followers + count;
        dispatch(updateUser({id,  followers: newFollowers }));
    }

    const fnLoadMore = () => {
        dispatch(incrementPage());
    };
     
   
    return ( 
        <>
            {users.length > 0 && 
            
                <List>
            
                {users.map(({user, avatar, tweets,followers, id}) => {
                     
                    
                    return (
                        <UserItem 
                            key={id}
                            name={user}
                            avatar={avatar}
                            tweets={tweets} 
                            followers={followers}
                            id={id}
                            
                            fnFollower={fnFollower}
                        ></UserItem>
                    )
                }
                )}
            
                </List>
            }
            {isLoaded && <LoadMore fnLoadMore={fnLoadMore}/>}
        </>   
        
    )
}

