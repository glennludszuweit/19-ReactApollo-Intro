import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import { register, login } from './mutations/userMutation.js';
import { users, user } from './queries/userQuery.js';
import {
  createPost,
  updatePost,
  deletePost,
} from './mutations/postMutation.js';
import { posts, post } from './queries/postQuery.js';
import {
  addComment,
  updateComment,
  deleteComment,
} from './mutations/commentMutation.js';
import { comments, comment } from './queries/commentQuery.js';

const Qeuries = new GraphQLObjectType({
  name: 'Queries',
  description: 'Queries',
  fields: { users, user, posts, post, comments, comment },
});

const Mutations = new GraphQLObjectType({
  name: 'Mutations',
  description: 'Mutations',
  fields: {
    register,
    login,
    createPost,
    updatePost,
    deletePost,
    addComment,
    updateComment,
    deleteComment,
  },
});

export default new GraphQLSchema({
  query: Qeuries,
  mutation: Mutations,
});
