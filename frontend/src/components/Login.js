import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";
import { API_END_POINT } from "../utils/constant";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "../redux/userSlice";

function Login() {
  const [isLogin, setIsLogin] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoading = useSelector((store) => store.app.isLoading);

  const loginhandler = () => {
    setIsLogin(!isLogin);
  };

  const getInputData = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    if (isLogin) {
      //login
      const user = { email, password };
      try {
        const res = await axios.post(`${API_END_POINT}/login`, user, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        if (res.data.success) {
          toast.success(res.data.message);
        }
        dispatch(setUser(res.data.user));
        navigate("/browse");
      } catch (error) {
        toast.error(error.response.data.message);
        console.log(error);
      } finally {
        dispatch(setLoading(false));
      }
    } else {
      //register
      const user = { fullName, email, password };
      dispatch(setLoading(true));
      try {
        const res = await axios.post(`${API_END_POINT}/register`, user, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        if (res.data.success) {
          toast.success(res.data.message);
        }
        setIsLogin(true);
      } catch (error) {
        toast.error(error.response.data.message);
        console.log(error);
      } finally {
        dispatch(setLoading(false));
      }
    }
    setFullName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <Header />

      <div className="absolute">
        <img
          className="w-[100vw] h-[100vh] bg-cover"
          src="https://wallpaperaccess.com/full/4321344.jpg"
          alt="bg-image"
        />
      </div>
      <form
        onSubmit={getInputData}
        className="flex flex-col w-3/12 p-12 my-36 left-0 right-0 mx-auto items-center justify-center absolute rounded bg-black opacity-90"
      >
        <h1 className="text-3xl text-white mb-5 font-bold">
          {isLogin ? "Login" : "SignUp"}
        </h1>
        <div className="flex flex-col">
          {!isLogin && (
            <input
              type="text"
              placeholder="Fullname"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
            />
          )}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
          />
          <button
            type="submit"
            className="bg-red-600 mt-6 p-3 text-white rounded-sm font-medium"
          >{`${
            isLoading ? "loading..." : isLogin ? "Login" : "SignUp"
          }`}</button>
          <p className="text-white mt-2">
            {isLogin ? "New to MovieBuzz?" : "Already have an account?"}
            <span
              onClick={loginhandler}
              className="ml-1 text-blue-900 font-medium cursor-pointer"
            >
              {isLogin ? "SignUp" : "Login"}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
