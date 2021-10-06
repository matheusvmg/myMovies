import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import StackRoutes from './stackRoutes';
import Movies from '../pages/Movies';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useThemeContext } from '../contexts/ThemeContext';

const Drawer = createDrawerNavigator();

function Routes() {
    const { applicationTheme } = useThemeContext();
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    backgroundColor: applicationTheme === 'light' ? '#191A30' : '#0F1016',
                    padding: 20,
                },
                drawerActiveBackgroundColor: '#E72F49',
                drawerActiveTintColor: '#FFFFFF',
                drawerInactiveTintColor: '#FFFFFF'
            }}
        >
            <Drawer.Screen
                name="HomeDrawer" 
                component={StackRoutes} 
                options={{
                    title: 'Home',
                    drawerIcon: ({ focused, size, color }) => (
                        <MaterialCommunityIcons 
                            name={focused ? 'movie-open' : 'movie-outline'}
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
            <Drawer.Screen 
                name="Movies" 
                component={Movies} 
                options={{
                    title: 'My Movies',
                    drawerIcon: ({ focused, size, color }) => (
                        <MaterialCommunityIcons 
                            name={focused ? 'archive' : 'archive-outline'}
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
        </Drawer.Navigator>
    );
};

export default Routes;