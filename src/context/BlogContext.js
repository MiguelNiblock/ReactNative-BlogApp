import React,{useReducer} from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({children}) => {

  const reducer = (state,action) => {
    switch(action.type){
      case 'add_post':
        return [...state,{title: `Post ${state.length + 1}`}];
      default:
        return state;
    };
  };

  const [BlogPosts, dispatch] = useReducer(reducer,[]);

  const addBlogPost = () =>{
    dispatch({type: 'add_post'});
  };

  return <BlogContext.Provider value={{data: BlogPosts, addBlogPost}}>{children}</BlogContext.Provider>;
}

export default BlogContext;

// a provider is a component that returns a context component, which wraps a 'children' component. children here will be our navigator component. Therefore, it will include all other screens and components inside our application.

// this file has two exports: Context and Provider. Provider is used to wrap other components, to provide them with a `value` prop, which includes anything we want to share to children. Context must be imported in the child component that needs the data, which is obtained with `useContext(context)`. This function will return the `value` object.