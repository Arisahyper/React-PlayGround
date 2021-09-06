import React, { useState } from 'react';

const App3 = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');

  const checkPassword = () => {
    if (password === process.env.REACT_APP_ADMIN_PASSWORD) {
      setIsLogin(true);
    } else {
      console.log(password);
      console.log(process.env.REACT_APP_ADMIN_PASSWORD);
    }
  };

  return isLogin ? (
    <>
      <h1>設定ページ</h1>
    </>
  ) : (
    <>
      <h1>Password</h1>
      <textarea
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
          setPassword(e.target.value);
        }}
      ></textarea>
      <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => checkPassword()}>
        Go
      </button>
    </>
  );
};

export default App3;
