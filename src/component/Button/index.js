import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import Theme from '../../assets/theme';

const Button = ({ title, onBtnClick, isButtonEnabled }) => {
    return (
        <TouchableOpacity
            onPress={onBtnClick}
            style={[styles.buttonMainViewStyle, { backgroundColor: !isButtonEnabled ? Theme.COLORS.DISABLE_BUTTON_BG : Theme.COLORS.PRIMARY }]}>
            <Text style={styles.titleStyle}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button;

const styles = StyleSheet.create({
    buttonMainViewStyle: {
        width: '80%',
        height: 50,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 100,
        borderRadius: 30,
        justifyContent: 'center'
    },
    titleStyle: {
        textAlign: 'center',
        color: Theme.COLORS.WHITE,
        fontWeight: 'bold'
    }
});