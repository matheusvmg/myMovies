import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from 'react';

const key = '@theme';

async function getTheme() {
    const theme = await AsyncStorage.getItem(key);
    return theme;
};

async function saveTheme(newTheme) {
    await AsyncStorage.setItem(key, newTheme);
    return newTheme;
};

export { getTheme, saveTheme };