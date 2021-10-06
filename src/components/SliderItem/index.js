import React from 'react';
import { 
    Container,
    BannerItem,
    Title,
    RateContainer,
    Rate
} from './styles';
import { Ionicons } from '@expo/vector-icons';
import { useThemeContext } from '../../contexts/ThemeContext';

function SliderItem({ data, navigatePage }) {
    const context = useThemeContext();
    return (
        <Container activeOpacity={0.7} onPress={() => navigatePage(data)} >
           <BannerItem 
            source={{
                uri: `https://image.tmdb.org/t/p/original/${data.poster_path}`
            }}
           />
           <Title numberOfLines={1} theme={context.applicationTheme}>{data.title}</Title>
           <RateContainer>
               <Ionicons name="md-star" size={12} color="#E7A74E" />
               <Rate theme={context.applicationTheme}>{data.vote_average}/10</Rate>
           </RateContainer>
        </Container>
    );
};

export default SliderItem;