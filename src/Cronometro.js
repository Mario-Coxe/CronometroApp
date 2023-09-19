import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import moment from 'moment';
import styles from  './style/CronometroStyle'

const Cronometro = () => {
    // Estados para controlar o tempo decorrido e o estado de início/pausa
    const [tempoDecorrido, setTempoDecorrido] = useState(0);
    const [iniciado, setIniciado] = useState(false);

    useEffect(() => {
        let interval;

        if (iniciado) {
            interval = setInterval(() => {
                setTempoDecorrido(prevTempo => prevTempo + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [iniciado]);

    const iniciarCronometro = () => {
        if (!iniciado) {
            setIniciado(true);
        }
    };

    const pausarCronometro = () => {
        if (iniciado) {
            setIniciado(false);
        }
    };

    const zerarCronometro = () => {
        clearInterval(this.interval);
        setTempoDecorrido(0);
        setIniciado(false);
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#1e1e1e'}/>
            <Text style={styles.tempo}>
                {moment.utc(tempoDecorrido * 1000).format('HH:mm:ss')}
            </Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={iniciarCronometro}>
                    <Text style={styles.buttonText}>Iniciar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={pausarCronometro}>
                    <Text style={styles.buttonText}>Pausar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={zerarCronometro}>
                    <Text style={styles.buttonText}>Zerar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Cronometro;
