import styled from 'styled-components/native';

export const Container = styled.View`
    height: 70px;
    flex-direction: row;
    align-items: center;
    padding-left: 14px; 
`;

export const MenuButton = styled.TouchableOpacity`
    height: 70px;
    flex-direction: row;
    align-items: center;
`;

export const Title = styled.Text`
    color: #191A30;
    font-size: 30px;
    font-weight: bold;
    margin-left: 18px;
`;

export const HeaderContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 90%;
`;

export const SwitchContainer = styled.View`
    padding-right: 14px;
    padding-top: 4px;
`;

export const SwitchThemeButton = styled.TouchableOpacity``;

export const SwitchThemeButtonText = styled.Text`
    font-size: 24px;
`;