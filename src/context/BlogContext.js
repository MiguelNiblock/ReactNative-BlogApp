import React,{useReducer} from 'react';
import createContext from './createContext';

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
    case 'add_post':
      return [...state,{
        id: Math.floor(Math.random() * 999),
        title: action.payload.title,
        content: action.payload.content,
      }];
    default:
      return state;
  };
};

const addBlogPost = (dispatch) => {
  return (title, content, callback)=>{
    dispatch({type: 'add_post', payload: {title,content}});
    if (callback){callback()}  
  };
};

const deleteBlogPost = (dispatch) => {
  return (id)=>dispatch({type: 'delete_post',payload: id});
};

const editBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({type:'edit_post',payload:{id,title,content}});
    if (callback){callback()}
  }
}

export const {Context, Provider} = createContext(
  reducer,
  {addBlogPost, deleteBlogPost, editBlogPost},
  [{id:12342342, title: 'Test Post', content: 'This is sample content'}]
);

// a provider is a component that returns a context component, which wraps a 'children' component. children here will be our navigator component. Therefore, it will include all other screens and components inside our application.

// this file has two exports: Context and Provider. Provider is used to wrap other components, to provide them with a `value` prop, which includes anything we want to share to children. Context must be imported in the child component that needs the data, which is obtained with `useContext(context)`. This function will return the `value` object.