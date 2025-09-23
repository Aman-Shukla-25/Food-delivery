import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../App'; // 'App' file se 'auth' object import karein
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  onAuthStateChanged 
} from "firebase/auth";
import './pages.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Yeh hook real-time mein user ke login status ko track karta hai
  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     // Agar user login hai, toh use home page par redirect karein
  //     navigate('/');
  //   }
  // });

  const handleAuthAction = async (e) => {
    e.preventDefault();
    setError('');

    if (isLoginMode) {
      // Login functionality
      try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("User logged in successfully!");
        navigate('/');
      } catch (err) {
        // Errors ko handle karein
        switch (err.code) {
          case 'auth/invalid-email':
            setError('Invalid email address.');
            break;
          case 'auth/user-not-found':
            setError('No user found with this email.');
            break;
          case 'auth/wrong-password':
            setError('Incorrect password.');
            break;
          default:
            setError('Login failed. Please try again.');
            console.error(err);
        }
      }
    } else {
      // Signup functionality
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log("User signed up successfully!");
        navigate('/');
      } catch (err) {
        // Errors ko handle karein
        switch (err.code) {
          case 'auth/email-already-in-use':
            setError('This email is already in use.');
            break;
          case 'auth/weak-password':
            setError('Password should be at least 6 characters.');
            break;
          case 'auth/invalid-email':
            setError('Invalid email address.');
            break;
          default:
            setError('Signup failed. Please try again.');
            console.error(err);
        }
      }
    }
  };

  return (
    <div className="page-container d-flex justify-content-center align-items-center">
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card p-4 shadow-lg">
              <h1 className="text-center mb-4 login-title">
                {isLoginMode ? 'Login' : 'Signup'}
              </h1>
              {error && <div className="alert alert-danger">{error}</div>}
              <form onSubmit={handleAuthAction}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-warning btn-lg login-btn">
                    {isLoginMode ? 'Login' : 'Create Account'}
                  </button>
                </div>
              </form>
              <div className="mt-3 text-center">
                <p>
                  {isLoginMode ? "Don't have an account?" : "Already have an account?"}
                  <button
                    className="btn btn-link toggle-btn"
                    onClick={() => setIsLoginMode(!isLoginMode)}
                  >
                    {isLoginMode ? 'Sign up here' : 'Login here'}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default LoginPage;


