import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Detail from '../pages/Detail';
import Search from '../pages/Search';

const Stack = createNativeStackNavigator();

function StackRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Home" 
                component={Home} 
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name="Detail" 
                component={Detail} 
                options={{
                    headerShown: false,
                    title: 'Details'
                }}
            />
            <Stack.Screen 
                name="Search"
                component={Search}
                options={{
                    headerTintColor: '#FFFFFF',
                    title: 'Your Search',
                    headerTitleStyle: {
                        color: '#FFFFFF'
                    },
                    headerStyle: {
                        backgroundColor: '#141A29'
                    }
                }}
            />
        </Stack.Navigator>
    );
};

export default StackRoutes;