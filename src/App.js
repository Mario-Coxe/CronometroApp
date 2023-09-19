import React from 'react';
import { View } from 'react-native';
import Cronometro from './Cronometro';
import styles from './style/AppStyle'

const App = () => {
    return (
        <View style={styles.container}>
            <Cronometro />
        </View>
    );
};


export default App;