import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Home = ({ navigation }) => {
    return (
        <View>
            <Text>Página Inicial</Text>
            <Text>Por que não quer aparecer</Text>

            <Button title="Formação" onPress={ () => navigation.navigate('Formacao') }/>
        </View>
    );
}

const estilos = StyleSheet.create({

});

export default Home;