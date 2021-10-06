import React, { useContext } from 'react';
import { Container, 
    MenuButton, 
    Title, 
    HeaderContainer, 
    SwitchContainer,
    SwitchThemeButton,
    SwitchThemeButtonText
} from './styles';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useThemeContext } from '../../contexts/ThemeContext';

function Header({ title }) {
    const { changeTheme, applicationTheme } = useThemeContext();
    const navigation = useNavigation();

    return (
        <Container>
            <MenuButton
                onPress={() => navigation.openDrawer()}
            >
                <Feather name="menu" size={36} color={applicationTheme === 'light' ? '#191A30' : '#FFFFFF'} />
            </MenuButton>
           <HeaderContainer>
                <Title theme={applicationTheme}>{title}</Title>
                <SwitchContainer>
                    <SwitchThemeButton
                        onPress={changeTheme}
                    >
                        <SwitchThemeButtonText>{applicationTheme === 'light' ? '🌚' : '🌞'}</SwitchThemeButtonText>
                    </SwitchThemeButton>
                </SwitchContainer>
           </HeaderContainer>
        </Container>
    );
};

export default Header;