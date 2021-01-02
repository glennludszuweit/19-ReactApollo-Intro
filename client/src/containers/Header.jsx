import React from 'react';

function Header() {
  return (
    <ul>
      <li>
        <a href='/'>Home</a>
      </li>
      <li>
        <a href='/addPost'>Add Post</a>
      </li>
      <li>
        <a href='/login'>Login</a>
      </li>
    </ul>
  );
}

export default Header;
