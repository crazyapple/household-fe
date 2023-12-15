import React, { useState } from 'react';
import { ROUTES } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { authActions, selectAuthenticated } from '../../store/reducers';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        // Xử lý phản hồi từ API, ví dụ: lưu token vào localStorage
        console.log(data);
      } else {
        // Xử lý lỗi
        console.error('Login failed');
      }
    } catch (error) {
      // Xử lý lỗi
      console.error('Login failed', error);
    }
  };

  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(selectAuthenticated);

  if (isAuthenticated) {
    return <Navigate to={ROUTES.HOME} />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-1/4 bg-white p-8 shadow-md rounded-md">
        <h2 className="text-2xl font-semibold mb-4">Đăng nhập</h2>
        <form >
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600">Tên người dùng</label>
            <input type="text" id="username" className="w-full p-2 border rounded-md" value={username} onChange={(e) => setUsername(e.target.value)}/>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">Mật khẩu</label>
            <input type="password" id="password" className="w-full p-2 border rounded-md" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={() => {              
              dispatch(authActions.loginSuccess());
              localStorage.setItem('isAuth', '1');
            }}
          >
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
