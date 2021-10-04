import React from 'react';
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

function Header({ title }) {
    const navigation = useNavigation();
    return (
        <Container>
            <MenuButton
                onPress={() => navigation.openDrawer()}
            >
                <Feather name="menu" size={36} color="#191A30" />
            </MenuButton>
           <HeaderContainer>
                <Title>{title}</Title>
                {/* <SwitchContainer>
                    <SwitchThemeButton>
                        <SwitchThemeButtonText>🌚</SwitchThemeButtonText>
                    </SwitchThemeButton>
                </SwitchContainer> */}
           </HeaderContainer>
        </Container>
    );
};

export default Header;