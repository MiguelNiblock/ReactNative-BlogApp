import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// named imports are necessary for non-default, named exports
import {Provider} from './src/context/BlogContext';
import IndexScreen from './src/screens/IndexScreen';

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs',
    },
  }
);

// turns `navigator` into a component
const App = createAppContainer(navigator);

export default () => {
  return <Provider><App /></Provider>
};
// App will be the children of BlogContext