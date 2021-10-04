import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 14px;
`;

export const Title = styled.Text`
    color: #191A30;
    font-size: 22px;
    font-weight: bold;
`;

export const RateContainer = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 8px 0;
    margin-top: 8px;
`;

export const Rate = styled.Text`
    color: #384058;
    font-size: 14px;
`;

export const ActionContainer = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 4px;
`;

export const DetailButton = styled.TouchableOpacity`
    width: 85%;
    height: 30px;
    background-color: #E72F49;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
`;

export const DeleteButton = styled.TouchableOpacity`
    width: 15%;
    height: 30px;
    align-items: center;
    justify-content: center;
`;

export const ButtonLabel = styled.Text`
    color: #FFFFFF;
    font-size: 14px;
    font-weight: bold;
`;

export const ContentArea = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 8px 0;
`;

export const Banner = styled.Image`
    width: 30%;
    height: 200px;
    border-radius: 8px;
`;

export const Description = styled.Text`
    width: 65%;
`;