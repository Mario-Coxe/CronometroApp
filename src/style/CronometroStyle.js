import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1e1e1e', // Fundo escuro
    },
    tempo: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#ffffff', // Texto branco
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
    button: {
        flex: 1,
        backgroundColor: '#007bff', // Cor de fundo azul
        padding: 15,
        margin: 10,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff', // Texto branco
        fontSize: 18,
        fontWeight: 'bold',
    },
});