import styled from "styled-components/native";
import themes from "../../styles/themes";

export const Container = styled.SafeAreaView`
    background-color: ${({ theme }) => theme === 'light' ? themes.light.backgroundColor : themes.dark.backgroundColor};
    flex: 1;
    padding: 4px 0;
`;

export const SearchContainer = styled.View`
    flex-direction: row;
    width: 100%;
    height: 50px;
    align-items: center;
    padding: 0 14px;
    margin-bottom: 8px;
`;

export const Input = styled.TextInput`
    background-color: transparent;
    width: 85%;
    height: 50px;
    border-radius: 50px;
    padding: 8px 15px;
    font-size: 16px;
    color: ${({ theme }) => theme === 'light' ? themes.light.primaryForegroundColor : themes.dark.primaryForegroundColor};
    border: 2px solid ${({ theme }) => theme === 'light' ? themes.light.primaryForegroundColor : themes.dark.primaryForegroundColor};
`;

export const SearchButton = styled.TouchableOpacity`
    width: 15%;
    height: 50px;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    padding-top: 20px;
    padding-bottom: 8px;
    font-size: 24px;
    font-weight: bold;
    color: ${({ theme }) => theme === 'light' ? themes.light.primaryForegroundColor : themes.dark.primaryForegroundColor};
    padding-left: 14px;
    padding-right: 14px;
`;

export const BannerButton = styled.TouchableOpacity``;

export const Banner = styled.Image`
    height: 150px;
    border-radius: 8px;
    margin: 0 14px;
`;

export const SliderMovie = styled.FlatList`
    height: 250px;
    padding: 0 14px;
`;