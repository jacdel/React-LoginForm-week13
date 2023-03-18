import React from 'react';

function LoginForm() {
  return (
    
    
    <form>
      <input type="text" id="username" name="username" placeholder='Username'/>
      <input type="password" id="password" name="password" placeholder='Password' />

      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;

