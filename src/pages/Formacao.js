import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Formacao = ({navigation}) => {
    return (
        <View>
            <Text>Página Formacao</Text>
            <Text>Por que não quer aparecer</Text>

            <Button title="Voltar" onPress={ () => navigation.goBack()} />
        </View>
    );
}

const estilos = StyleSheet.create({

});

export default Formacao;