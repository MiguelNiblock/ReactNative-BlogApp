import React,{useReducer} from 'react';
import createContext from './createContext';

const reducer = (state,action) => {
  switch(action.type){
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
    callback();
  };
};

const deleteBlogPost = (dispatch) => {
  return (id)=>dispatch({type: 'delete_post',payload: id});
};

export const {Context, Provider} = createContext(
  reducer,
  {addBlogPost, deleteBlogPost},
  [{id:12342342, title: 'Test Post', content: 'This is sample content'}]
);

// a provider is a component that returns a context component, which wraps a 'children' component. children here will be our navigator component. Therefore, it will include all other screens and components inside our application.

// this file has two exports: Context and Provider. Provider is used to wrap other components, to provide them with a `value` prop, which includes anything we want to share to children. Context must be imported in the child component that needs the data, which is obtained with `useContext(context)`. This function will return the `value` object.