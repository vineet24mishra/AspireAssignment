import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import Theme from '../../assets/theme';
import Strings from '../../locale'

const DebitCardComponent = ({ extraStyle, isDataShow = true, onHideShowDetailsClick }) => {
    let cardDetailsShowHideSource = isDataShow ? require('../../assets/images/icons/Hide_Details.png') 
    : require('../../assets/images/icons/Show_Details.png');
    
    let hideShowText = isDataShow ? Strings.hide_card_number : Strings.show_card_number;

    return (
        <View >
            <View style={styles.hideShowViewStyle}>
                <TouchableOpacity
                    onPress={onHideShowDetailsClick}
                    style={{ flexDirection: 'row' }}>
                    <Image source={cardDetailsShowHideSource} />
                    <Text style={styles.hideShowCardTextStyle}>{hideShowText}</Text>
                </TouchableOpacity>
            </View>

            <View style={[styles.creditCardViewContainer, extraStyle]}>
                <View style={styles.cardLogoViewStyle}>
                    <Image style={styles.logoStyle} source={require('../../assets/images/icons/Home.png')} />
                    <Text style={styles.nameStyle}>{Strings.aspire_small}</Text>
                </View>
                <Text style={styles.cardHolderNameStyle}>{Strings.default_card_holder_name}</Text>
                <Text style={[styles.cardNumberStyle, { fontWeight: isDataShow ? 'normal' : 'bold' }]}>{isDataShow ? Strings.default_cardNumberVisible : Strings.default_cardNumberHide}</Text>
                <View style={styles.validityCvvStyleView}>
                    <Text style={styles.validityDateStyle}>{Strings.default_valid_date}</Text>
                    <Text style={[styles.validityDateStyle, { marginLeft: Theme.SIZES.THIRTY }]}>{Strings.cvv}
                        <Text>{isDataShow ? Strings.default_cvv : Strings.default_cvv_hide}</Text>
                    </Text>

                </View>
                <Text style={styles.cardTypeStyle}>{Strings.default_card_type}</Text>
            </View>
        </View>
    );
};

export default DebitCardComponent;

const styles = StyleSheet.create({
    creditCardViewContainer: {
        width: '85%',
        height: 200,
        padding: Theme.SIZES.TWENTY,
        backgroundColor: Theme.COLORS.PRIMARY,
        borderRadius: Theme.SIZES.TWENTY,


    },
    cardLogoViewStyle: {
        alignSelf: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row'
    },
    logoStyle: { tintColor: Theme.COLORS.WHITE },
    nameStyle: {
        marginLeft: Theme.SIZES.TEN,
        fontSize: Theme.SIZES.TEXT_LARGE,
        color: Theme.COLORS.WHITE,
        fontWeight: 'bold'
    },
    cardHolderNameStyle: {
        marginLeft: Theme.SIZES.TEN,
        fontSize: Theme.SIZES.TEXT_XXLARGE,
        color: Theme.COLORS.WHITE,
        fontWeight: 'bold',
    },
    cardTypeStyle: {
        marginLeft: Theme.SIZES.TEN,
        fontSize: Theme.SIZES.TEXT_XXLARGE,
        color: Theme.COLORS.WHITE,
        fontWeight: 'bold',
        marginTop: 'auto',
        alignSelf: 'flex-end'
    },
    validityDateStyle: {
        marginLeft: Theme.SIZES.TEN,
        fontSize: Theme.SIZES.TEXT_LARGE,
        color: Theme.COLORS.WHITE,
    },
    validityCvvStyleView: {
        width: '100%',
        flexDirection: 'row'
    },
    cardNumberStyle: {
        marginLeft: Theme.SIZES.TEN,
        fontSize: Theme.SIZES.TEXT_LARGE,
        color: Theme.COLORS.WHITE,
        marginVertical: Theme.SIZES.TEN
    },
    hideShowViewStyle: {
        width: 180,
        height: 45,
        backgroundColor: Theme.COLORS.WHITE,
        alignSelf: 'flex-end',
        right: Theme.SIZES.THIRTY,
        position: 'absolute',
        top: Theme.SIZES.TEN,
        flexDirection: 'row',
        paddingTop: Theme.SIZES.TEN,
        justifyContent: 'center'

    },
    hideShowCardTextStyle: {
        marginLeft: Theme.SIZES.TEN,
        fontSize: Theme.SIZES.TEXT_SMALL,
        color: Theme.COLORS.PRIMARY,
        fontWeight: 'bold'
    },

});
