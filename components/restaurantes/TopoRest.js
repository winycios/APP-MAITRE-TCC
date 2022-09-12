import React from 'react';
import { 
    Text, 
} from 'react-native';
import { useTheme } from '@react-navigation/native';

import styles from './styles';

export default function Label(props){
    const { colors } = useTheme();

    return(
        <> 
            <Text style={[styles.texto,{color: colors.text }]}>{props.name} </Text>

        </>

    );
}

