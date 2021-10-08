import React from 'react';
import { BackButton, Name } from './styles';
import { WebView } from 'react-native-webview';
import { Feather } from '@expo/vector-icons';

function ModalLink({ link, title, close }) {
    return (
        <>
            <BackButton onPress={close}>
                <Feather 
                    name="x"
                    color="#FFFFFF"
                    size={35}
                />
                <Name numberOfLines={1}>{title}</Name>
            </BackButton>
            {link && <WebView 
                source={{
                    uri: link
                }}
            />}
        </>
    );
};

export default ModalLink;