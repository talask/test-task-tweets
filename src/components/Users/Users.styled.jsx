import styled from 'styled-components';

export const List = styled.ul`
    list-style: none;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    align-items: center;
  
`;

export const ListItem = styled.li`
    width: 380px;
    height: 460px;
    padding: 20px 15px;
    background-color: #5736A3;

    text-align: center;
    text-transform: uppercase;
    color: #EBD8FF;

`;

export const ButtonLoadMore = styled.button`
    width: 200px;
    height: 50px;
    padding: 14px 28px;
    color: #EBD8FF;
    text-transform: uppercase;
    background-color: #5736A3;
    border: none;
    border-radius: 5px;
   

`

export const ImgAvatar = styled.img`
    border-radius: 50%;
    width: 80px; 
    height: 80px; 
    object-fit: cover; 
  `
