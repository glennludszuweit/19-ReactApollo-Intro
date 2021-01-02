import { useQuery, gql } from '@apollo/client';

const GET_POSTS = gql`
  query {
    posts {
      id
      title
      body
      author {
        name
      }
      comments {
        comment
      }
    }
  }
`;

function Home() {
  const { loading, error, data } = useQuery(GET_POSTS);
  if (loading) return <h3>Loading ...</h3>;
  if (error) return <h5>{error.message}</h5>;
  const postsData = data.posts;

  return postsData.map((post) => (
    <div key={post.id}>
      <h1>{post.title}</h1>
      <small>{post.author.name}</small>
      <p>{post.body}</p>
      <h3>Comments:</h3>
      {post.comments.map((comment, index) => (
        <div key={index}>
          <p>{comment.comment}</p>
        </div>
      ))}
    </div>
  ));
}

export default Home;
