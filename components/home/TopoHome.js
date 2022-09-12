import React from 'react';
import { 
    Text, 
} from 'react-native';

/*css */
import styles from './styles';

export default function Label(props){
    return(
        <> 
            <Text style={styles.texto}>{props.name} </Text>

        </>

    );
}

