import styled from "styled-components/native";
import themes from "../../styles/themes";

export const Container = styled.SafeAreaView`
    background-color: ${({ theme }) => theme === 'light' ? themes.light.secondaryBackgroundColor : themes.dark.secondaryBackgroundColor};
    flex: 1;
    padding: 4px 0;
`;

export const ListMovies = styled.FlatList``;