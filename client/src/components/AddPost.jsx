import { useMutation, gql } from '@apollo/client';
import { useRef } from 'react';

const ADD_POST = gql`
  mutation($title: String!, $body: String!) {
    createPost(title: $title, body: $body) {
      title
      body
      id
      author {
        name
      }
    }
  }
`;

function AddPost() {
  const titleRef = useRef('');
  const bodyRef = useRef('');
  const [createPost] = useMutation(ADD_POST);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await createPost({
          variables: {
            title: String(titleRef.current.value),
            body: String(bodyRef.current.value),
          },
        });
      }}
    >
      <input type='text' id='title' ref={titleRef} placeholder='Title' />
      <input type='text' id='body' ref={bodyRef} placeholder='Body' />
      <button type='submit'>Add</button>
    </form>
  );
}

export default AddPost;
