import { useState } from "react";
import "../styles.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/menu");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <h1 className="app-title">Online Kitchen</h1>
      <div className="login-card">
        <h2>🦇 Signup</h2>
        <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
        <button onClick={signup}>Signup</button>
        <button onClick={() => navigate("/login")}>Back to Login</button>
      </div>
    </>
  );
}

export default Signup;
