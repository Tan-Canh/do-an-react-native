import React from 'react';

import { createStackNavigator } from 'react-navigation-stack'
import Icon from 'react-native-vector-icons/Ionicons'
import AdmissionsScreen from './AdmissionsScreen';

export default createStackNavigator({
    Admissions: {
        screen: AdmissionsScreen,
        navigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: '#3a9ad3',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
                textAlign: 'center',
                flex: 1
            },
            headerLeft: <Icon 
                style={{ paddingLeft: 10, color: 'white' }}
                onPress={() => navigation.openDrawer()}
                name='md-menu'
                size={30}
            />,
            
          }),
    }
});