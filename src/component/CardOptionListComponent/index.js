import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Switch } from 'react-native';
import Theme from '../../assets/theme';
import Strings from '../../locale'

const CardOptionListComponent = ({ item, onPressItem }) => {
    console.log(`item.optionTitle --->>>`, item.optionTitle);
    return (
        <TouchableOpacity
            style={{opacity : item.optionTitle === Strings.card_spend_limit_title ? 0: 1}}
            onPress={onPressItem}
         style={styles.itemContainerStyle}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={item.optionImage} />
                <View style = {{marginHorizontal: 5, width: item.isSwitchBtn ? '75%' : '90%'}}>
                    <Text style = {{fontWeight: 'bold', fontSize: Theme.SIZES.TEXT_MEDIUM, color: Theme.COLORS.DABIT_OPTION_TITLE_COLOR}}>{item.optionTitle}</Text>
                    <Text style = {{fontSize: Theme.SIZES.TEXT_SMALL, color: Theme.COLORS.DABIT_OPTION_DESCRIPTION_COLOR}}>{item.optionDescription}</Text>
                </View>
            </View>

            {item.isSwitchBtn && <Switch />}
        </TouchableOpacity>
    );
};

export default CardOptionListComponent;

const styles = StyleSheet.create({
    itemContainerStyle: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 20,
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    }

});
