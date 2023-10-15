import React, { useEffect } from "react";
import { Users } from './Users/Users';
import { Div } from './Common/App.styled';
import { fetchUsers } from "../redux/operation";
import { useDispatch } from "react-redux";
import { Loader } from "./Loader/Loader";
import { useUser } from '../redux/hooks/useUser'



export const App = () => {
  const dispatch = useDispatch();
 
  const { limit, page, error, isLoading } = useUser();
 
  useEffect(() => {
   
    
      dispatch(fetchUsers({limit, page}));
   
  }, [dispatch, limit, page]);

  return (
    <Div>
      {isLoading && !error && <Loader/>}
      <Users/>
      
    </Div>
      
    )
  
};


     