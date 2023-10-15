import { useSelector } from 'react-redux';
import {
  getUsers,
  getIsLoading,
  getError,
  getPage,
  getLimit,
  getIsLoaded
} from '../selectors'

export const useUser = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const users = useSelector(getUsers);
  const page = useSelector(getPage);
  const limit = useSelector(getLimit);
  const isLoaded = useSelector(getIsLoaded)

  return {
    isLoading,
    users,
    error,
    page,
    limit,
    isLoaded
  };
}