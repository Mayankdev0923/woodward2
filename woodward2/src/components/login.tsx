import React, { useState } from "react";
import { motion } from "framer-motion";
import greenbg from "../assets/greenbg.jpg";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword } from "./Firebase";

interface LoginPageProps {
  setIsLoggedIn: (loggedIn: boolean) => void;
}

function LoginPage({ setIsLoggedIn }: LoginPageProps) {
  const [identifier, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  console.log(error)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, identifier, password);
      setIsLoggedIn(true);
      navigate("/admin");
    } catch (error) {
      setError("Invalid login credentials");
      setIsLoggedIn(false);
      alert("Invalid login credentials");
    }
  };

  return (
    <HelmetProvider>
      <div
        className="w-full flex justify-center items-center bg-repeat text-dkkbrown bg-ltgreen overflow-hidden"
        style={{ backgroundImage: `url(${greenbg})` }}
      >
        <Helmet>
          <title>Login</title>
        </Helmet>
        <div className="flex justify-center flex-col items-center space-y-10 p-10 pb-40 md:pt-20 pt-40 w-full h-full">
          <motion.form
            onSubmit={handleLogin}
            className="flex flex-col space-y-6 p-12 rounded-3xl bg-white shadow-lg w-full max-w-3xl motion-safe:animate-slideIn"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col space-y-2">
              <label className="text-lg font-medium" htmlFor="username">
                Email Identifier
              </label>
              <input
                type="text"
                id="username"
                className="p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-dkkbrown"
                placeholder="Enter your email/identifier"
                value={identifier}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-lg font-medium" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-dkkbrown"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-center">
              <motion.button
                type="submit"
                className="py-3 px-6 rounded text-xl text-white bg-dkkbrown outline outline-2 outline-dkkbrown hover:text-dkkbrown hover:bg-white transition duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Login
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default LoginPage;