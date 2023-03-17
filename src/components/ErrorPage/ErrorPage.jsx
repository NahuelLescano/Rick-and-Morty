import { useNavigate } from 'react-router-dom';

export default function Error() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/home');
  }

  return (
    <div>
      <h1>Oops! Something went wrong!</h1>
      <p>The page you were looking for could not be found.</p>
      <button onClick={handleClick}>Go back</button>
    </div>
  )
}
