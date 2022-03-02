import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, StyleSheet, ScrollView, FlatList } from 'react-native';
import Header from '../../component/Header';
import DebitCardComponent from '../../component/DebitCardComponent';
import Strings from '../../locale';
import Theme from '../../assets/theme';
import CardOptionListComponent from '../../component/CardOptionListComponent'
import { useSelector } from 'react-redux';


let cardFunctionOptions = [
  {
    optionImage: require('../../assets/images/icons/Top_up.png'),
    optionTitle: Strings.card_top_up_title,
    optionDescription: Strings.card_top_up_desc,
    isSwitchBtn: false,
    isChecked: false
  },
  {
    optionImage: require('../../assets/images/icons/Spend_limit.png'),
    optionTitle: Strings.card_spend_limit_title,
    optionDescription: Strings.card_spend_desc,
    isSwitchBtn: true,
    isChecked: false
  },
  {
    optionImage: require('../../assets/images/icons/Freeze_Card.png'),
    optionTitle: Strings.card_freeze_title,
    optionDescription: Strings.card_freeze_desc,
    isSwitchBtn: true,
    isChecked: false
  },
  {
    optionImage: require('../../assets/images/icons/New_Card.png'),
    optionTitle: Strings.card_new_card_title,
    optionDescription: Strings.card_new_card_desc,
    isSwitchBtn: false,
    isChecked: false
  },
  {
    optionImage: require('../../assets/images/icons/Deactvate_Card.png'),
    optionTitle: Strings.card_deactivate_account_title,
    optionDescription: Strings.card_deactivate_desc,
    isSwitchBtn: false,
    isChecked: false
  },

]

const DebitCard = ({ navigation }) => {
  const spendLimit = useSelector(state => state.setCardLimitReducer.cardLimit);
  const [isCardNumberVisible, setIsCardNumberVisible] = useState(true)

  onCardDetailsShowHide = () => {
    setIsCardNumberVisible(!isCardNumberVisible)
  }

  onPressOptionItem = (item) => {
    if (item.optionTitle === Strings.card_spend_limit_title) {
      navigation.navigate('SpendLimit');
    }
  }

  return (
    <SafeAreaView>
      <View style={styles.screenContaierView}>

      <View >
            <Header isBackBtnShow={false} />
            <Text style={styles.debitTextStyle}>{Strings.debit_card}</Text>
            <Text style={styles.avaialableBalTextStyle}>{Strings.available_bal}</Text>
            <View style={styles.availableBalViewStyle}>
              <View style={styles.currencyViewStyle}>
                <Text style={styles.currencyTextStyle}>{Strings.currency_sign}</Text>
              </View>
              <Text style={styles.availableAmountTextStyle}>{Strings.default_available_amt}</Text>
            </View>
          </View>

        <ScrollView
          style={{ backgroundColor: 'transparent', zIndex: 999999, height: '100%' }}
          showsVerticalScrollIndicator={false}>

          <DebitCardComponent extraStyle={styles.credit_card_style}
            onHideShowDetailsClick={onCardDetailsShowHide}
            isDataShow={isCardNumberVisible} />

          <View style={styles.optionMainViewStyle}>

            {spendLimit && <View style={{ padding: 20 }}>
              <View style={styles.cardLimitInfoMainView}>
                <Text>{Strings.spend_limit_text}</Text>
                <Text>{`$ 0 /${spendLimit}`}</Text>
              </View>
              <View style={styles.spendIndicatorView} />
            </View>}
            <FlatList
              data={cardFunctionOptions}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => {
                return (
                  <CardOptionListComponent
                    onPressItem={() => { onPressOptionItem(item) }}
                    item={item} />
                )
              }
              }
            />

          </View>

        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default DebitCard;

const styles = StyleSheet.create({
  screenContaierView: {
    height: '100%',
    width: '100%',
    backgroundColor: Theme.COLORS.SECONDARY,
    zIndex: 1
  },
  debitTextStyle: {
    color: Theme.COLORS.WHITE,
    fontSize: Theme.SIZES.TEXT_XLARGE,
    fontWeight: 'bold',
    paddingHorizontal: Theme.SIZES.TWENTY
  },
  avaialableBalTextStyle: {
    color: Theme.COLORS.WHITE,
    fontSize: Theme.SIZES.TEXT_LARGE,
    fontWeight: 'normal',
    paddingHorizontal: Theme.SIZES.TWENTY,
    marginTop: Theme.SIZES.TWENTY
  },
  availableBalViewStyle: {
    marginTop: Theme.SIZES.TWENTY,
    flexDirection: "row",
    alignItems: 'center',
    marginHorizontal: Theme.SIZES.TWENTY
  },
  currencyViewStyle: {
    width: 60,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Theme.COLORS.PRIMARY,
    borderRadius: Theme.SIZES.FIVE
  },
  currencyTextStyle: {
    color: Theme.COLORS.WHITE,
    fontSize: Theme.SIZES.TEXT_LARGE,
    fontWeight: 'bold',
  },
  availableAmountTextStyle: {
    color: Theme.COLORS.WHITE,
    fontSize: 35,
    fontWeight: 'bold',
    marginHorizontal: Theme.SIZES.TEN
  },
  credit_card_style: {
    alignSelf: 'center',
    marginTop: 40,
    zIndex: 99

  },
  optionMainViewStyle: {
    width: '100%',
    height: '100%',
    backgroundColor: Theme.COLORS.WHITE,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
  },
  cardLimitInfoMainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  spendIndicatorView: {
    height: 10,
    width: '100%',
    backgroundColor: Theme.COLORS.AMOUNT_OPTION_BG,
    borderRadius: 5,
    marginTop: 10
  }
});