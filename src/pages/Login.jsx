import { useState } from "react";
import "../styles.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/menu");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <h1 className="app-title">Online Kitchen</h1>
      <div className="login-container">
        <div className="login-card">
          <h2>🦇 Login</h2>
          <input 
            placeholder="Email" 
            type="email" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
          />
          <input 
            placeholder="Password" 
            type="password" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
          />
          <button onClick={login}>Login</button>
          <button onClick={() => navigate("/signup")}>Signup</button>
        </div>
      </div>
    </>
  );
}

export default Login;
