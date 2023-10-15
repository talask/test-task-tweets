import React from 'react';
import { ButtonLoadMore } from '../Users/Users.styled'

export const LoadMore = ({fnLoadMore}) => {
    
    return (
       
        <ButtonLoadMore onClick={fnLoadMore}>Load More</ButtonLoadMore>
          
    )

}