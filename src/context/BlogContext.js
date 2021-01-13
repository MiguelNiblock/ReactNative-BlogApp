import React,{useReducer} from 'react';
import createContext from './createContext';
import jsonServer from '../api/jsonServer';

const reducer = (state,action) => {
  switch(action.type){
    case 'edit_post':
      return state.map((post)=>{
        return post.id === action.payload.id
          ? action.payload
          : post
      })
    case 'delete_post':
      return state.filter((post)=>post.id !== action.payload)
    // case 'add_post':
    //   return [...state,{
    //     id: Math.floor(Math.random() * 999),
    //     title: action.payload.title,
    //     content: action.payload.content,
    //   }];
    case 'get_blogposts':
      return action.payload; // total source of truth, so we replace inner state with it.
    default:
      return state;
  };
};

const addBlogPost = (dispatch) => {
  return async (title, content, callback)=>{
    await jsonServer.post('/blogposts',{title,content})
    // dispatch({type: 'add_post', payload: {title,content}});
    if (callback){callback()}  
  };
};

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/blogposts/${id}`)
    dispatch({type: 'delete_post',payload: id});
  }
};

const editBlogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`/blogposts/${id}`, {title,content})
    dispatch({type:'edit_post',payload:{id,title,content}});
    if (callback){callback()}
  }
}

const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await jsonServer.get('/blogposts');
    dispatch({type: 'get_blogposts', payload: response.data})
  }
}

export const {Context, Provider} = createContext(
  reducer,
  {addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts},
  [{id:1234, title: 'Test Post', content: 'This is sample content'}]
);

// a provider is a component that returns a context component, which wraps a 'children' component. children here will be our navigator component. Therefore, it will include all other screens and components inside our application.

// this file has two exports: Context and Provider. Provider is used to wrap other components, to provide them with a `value` prop, which includes anything we want to share to children. Context must be imported in the child component that needs the data, which is obtained with `useContext(context)`. This function will return the `value` object.