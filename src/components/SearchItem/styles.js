import styled from 'styled-components/native';
import themes from '../../styles/themes';

export const Container = styled.TouchableOpacity`
    padding: 14px;
`;

export const Banner = styled.Image`
    width: 100%;
    height: 140px;
    border-radius: 8px;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme === 'light' ? themes.light.primaryForegroundColor : themes.dark.primaryForegroundColor};
    font-weight: bold;
    font-size: 18px;
    padding-top: 8px;
`;

export const RateContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Rate = styled.Text`
    padding-left: 4px;
    color: ${({ theme }) => theme === 'light' ? themes.light.secondaryForegroundColor : themes.dark.secondaryForegroundColor};;
    font-size: 12px;
    padding-top: 4px;
`;