import { useNavigate} from 'react-router-dom';

const Logout = ({onLogout}) => {
  const navigate = useNavigate();
  onLogout(false);
  // Redirect to signin
  navigate('/signin');
};

export default Logout;
