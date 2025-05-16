import { useNavigate } from 'react-router-dom';
import './Error.css';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="error-container">
      <div className="error-content">
        <div className="error-number">
          <span className="number">4</span>
          <span className="number">0</span>
          <span className="number">4</span>
        </div>
        <h1 className="error-title">Oops! Page not found</h1>
        <p className="error-message">
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>
        <div className="error-actions">
          <button onClick={() => navigate(-1)} className="error-button">
            Go Back
          </button>
          <button onClick={() => navigate('/')} className="error-button">
            Return Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;