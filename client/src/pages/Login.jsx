// import React, { useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import './Login.css';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const history = useHistory();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     const storedUserData = localStorage.getItem(email);
    
//     if (!storedUserData) {
//       setErrorMessage('This email is not registered.');
//       return;
//     }

//     const userData = JSON.parse(storedUserData);
    
//     if (userData.password !== password) {
//       setErrorMessage('Incorrect password.');
//       return;
//     }

//     // If login is successful, store the username in localStorage
//     localStorage.setItem('username', userData.username);
//     history.push('/');
//   };

//   return (
//     <div className="login-page">
//       <h2>Login</h2>
//       {errorMessage && <div className="error-message">{errorMessage}</div>}
//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//       <p>Don't have an account? <Link to="/Register">Register</Link></p>
//     </div>
//   );
// }

// export default Login;



// Login.jsx
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUserData = localStorage.getItem(email);
    
    if (!storedUserData) {
      setErrorMessage('This email is not registered.');
      return;
    }

    const userData = JSON.parse(storedUserData);
    
    if (userData.password !== password) {
      setErrorMessage('Incorrect password.');
      return;
    }

    localStorage.setItem('username', userData.username);
    history.push('/');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <Link to="/Register">Register</Link></p>
      </div>
    </div>
  );
}

export default Login;