import styled from 'styled-components/native';
import themes from '../../styles/themes';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme === 'light' ? themes.light.secondaryBackgroundColor : themes.dark.secondaryBackgroundColor};
`;

export const ListMovies = styled.FlatList``;