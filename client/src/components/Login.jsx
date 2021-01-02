import { gql, useMutation } from '@apollo/client';
import { useRef } from 'react';

const LOGIN = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

function Login() {
  const emailRef = useRef('');
  const passRef = useRef('');
  const [login] = useMutation(LOGIN);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const token = await login({
          variables: {
            email: String(emailRef.current.value),
            password: String(passRef.current.value),
          },
        });

        console.log(token.data.login);
        localStorage.setItem('graphqlBlog', JSON.stringify(token.data.login));
      }}
    >
      <input type='email' ref={emailRef} />
      <input type='password' ref={passRef} />
      <button type='submit'>Login</button>
    </form>
  );
}

export default Login;
