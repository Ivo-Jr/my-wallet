import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

export const HomeLayout = ({ children }) => {
  const { logged } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if(logged === true) {
      navigate('/', { replace: true })
    }
  },[logged, navigate])

  return children
}
