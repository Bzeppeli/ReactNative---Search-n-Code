import { createAppContainer } from 'react-navigation';
import { createStackNavigation } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
    createStackNavigation({
        Main:{
            screen: Main,
            navigationOptions:{
                title: 'Search n Code'
            }
        },
        Profile:{
            screen: Profile,
            navigationOptions:{
                title:'Perfil no Github'
            }
        }
    }, {
        defaultNavigationOptions: {
            headerTintColor: '#FFF',
            headerBackTitle: null,
            headerStyle: {
                backgroundColor: '#7D40E7'
            },
        },
    })
);

export default Routes;