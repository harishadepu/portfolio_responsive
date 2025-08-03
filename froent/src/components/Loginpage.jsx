import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Loginpage = () => {
  const [current, setCurrent] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitData = async (e) => {
    e.preventDefault();

    if (!email || !password || (current === "Sign Up" && !name)) {
      alert("Please fill in all required fields");
      return;
    }

    const payload = current === "Sign Up"
      ? { name, email, password }
      : { email, password };

    const endpoint = current === "Sign Up" ? "/signup" : "/login";
    const url = `http://localhost:5000${endpoint}`;


    try {
      setLoading(true);
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      setLoading(false);

      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      if (data.message === "User created successfully" || data.message === "Login successful") {
        alert(data.message);
        navigate("/");
      } else {
        alert(data.message);
      }
    } catch (err) {
      setLoading(false);
      console.error("Error:", err);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-500'>
      <div className='flex flex-col justify-center items-center bg-gray-800 w-[320px] p-8 rounded text-white gap-4'>
        <h1 className='text-2xl font-bold'>{current}</h1>
        <form className='flex flex-col gap-2 text-white' onSubmit={submitData}>
          {current === "Sign Up" && (
            <input
              type='text'
              onChange={(e) => setName(e.target.value)}
              value={name}
              className='border p-3 rounded focus:outline-none'
              placeholder='Username'
              required
            />
          )}
          <input
            type='email'
            className='border p-3 rounded focus:outline-none'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
            required
          />
          <input
            type='password'
            className='border p-3 rounded focus:outline-none'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            required
          />
          <button
            type='submit'
            className='bg-blue-500 p-3 border-none rounded-lg mt-2 disabled:opacity-50'
            disabled={loading}
          >
            {loading ? "Please wait..." : "Click here"}
          </button>
          <p>
            {current === "Sign Up" ? "Already have an account?" : "Create a new account?"}
            <span
              className='text-red-500 font-bold cursor-pointer ml-1'
              onClick={() => setCurrent(current === "Sign Up" ? "Login" : "Sign Up")}
            >
              {current === "Sign Up" ? "Login" : "Sign Up"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Loginpage;