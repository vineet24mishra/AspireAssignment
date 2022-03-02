import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from '../../component/Header';
import Theme from '../../assets/theme';
import Strings from '../../locale';
import Button from '../../component/Button'
import { useDispatch } from 'react-redux';
import { setCardLimit } from '../../redux/actions'


const SpendLimit = ({ navigation }) => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState('');
  const [amountSelected, setAmountSelected] = useState(false)

  onSaveBtnClick = () => {
    dispatch(setCardLimit(amount))
    navigation.goBack();
  }

  onBackBtnPress = () => {
    navigation.goBack();
  }

  onFiveSelected = () => {
    setAmountSelected(true);
    setAmount('5,000');
  }

  onTenSelected = () => {
    setAmountSelected(true);
    setAmount('10,000');
  }

  onTwentySelected = () => {
    setAmountSelected(true);
    setAmount('20,000');
  }



  return (
    <SafeAreaView>
      <Header
        isBackBtnShow={true}
        onBackPress={onBackBtnPress} />
      <View style={styles.mainContainerStyle}>
        <Text style={styles.spendingLimitTextStyle}>{Strings.spending_limit_screen_title}</Text>
        <View style={styles.whiteBgViewStyle}>
          <View style={styles.spendingTextStyle}>
            <Image source={require('../../assets/images/icons/Limit.png')} />
            <Text style={{ marginHorizontal: Theme.SIZES.TEN }}>{Strings.set_limit_weekly_title}</Text>
          </View>
          <View style={styles.availableBalViewStyle}>
            <View style={styles.currencyViewStyle}>
              <Text style={styles.currencyTextStyle}>{Strings.currency_sign}</Text>
            </View>
            <Text style={styles.availableAmountTextStyle}>{amount}</Text>
          </View>
          <View style={styles.dividerStyle} />
          <Text style={styles.weeklyTextStyle}>{Strings.weekly_desc}</Text>
          <View style={styles.amountOptionMainViewStyle}>
            <TouchableOpacity style={styles.amountOptionStyle}
              onPress={onFiveSelected}>
              <Text style={{ color: Theme.COLORS.PRIMARY }}>{Strings.currency_sign}
                <Text>{Strings.five}</Text>
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.amountOptionStyle}
              onPress={onTenSelected}>
              <Text style={{ color: Theme.COLORS.PRIMARY }}>{Strings.currency_sign}
                <Text>{Strings.ten}</Text>
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.amountOptionStyle}
              onPress={onTwentySelected}>
              <Text style={{ color: Theme.COLORS.PRIMARY }}>{Strings.currency_sign}
                <Text>{Strings.twenty}</Text>
              </Text>
            </TouchableOpacity>
          </View>

          <Button
            title='Save'
            isButtonEnabled={amountSelected}
            onBtnClick={onSaveBtnClick} />

        </View>
      </View>
    </SafeAreaView>
  )
}

export default SpendLimit;

const styles = StyleSheet.create({
  mainContainerStyle: {
    width: '100%',
    height: '100%',
    backgroundColor: Theme.COLORS.SECONDARY
  },
  spendingLimitTextStyle: {
    color: Theme.COLORS.WHITE,
    fontSize: Theme.SIZES.TWENTY,
    fontWeight: 'bold',
    paddingHorizontal: Theme.SIZES.TWENTY
  },
  whiteBgViewStyle: {
    width: '100%',
    height: '90%',
    backgroundColor: Theme.COLORS.WHITE,
    marginTop: Theme.SIZES.THIRTY,
    borderTopEndRadius: Theme.SIZES.THIRTY,
    borderTopStartRadius: Theme.SIZES.THIRTY,
  },
  spendingTextStyle: {
    width: '100%',
    flexDirection: 'row',
    padding: Theme.SIZES.TWENTY
  },
  availableBalViewStyle: {
    marginVertical: Theme.SIZES.FIVE,
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
    color: Theme.COLORS.BLACK,
    fontSize: 35,
    fontWeight: 'bold',
    marginHorizontal: Theme.SIZES.TEN
  },
  dividerStyle: {
    width: '90%',
    height: 1,
    backgroundColor: Theme.COLORS.DIVIDER_COLOR,
    marginHorizontal: 20
  },
  amountOptionStyle: {
    width: 80,
    height: 40,
    backgroundColor: Theme.COLORS.AMOUNT_OPTION_BG,
    alignItems: 'center',
    justifyContent: 'center'
  },
  weeklyTextStyle: {
    marginHorizontal: Theme.SIZES.TEN,
    padding: 10,
    color: Theme.COLORS.WEEKLY_TEXT_COLOR
  },
  amountOptionMainViewStyle: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10
  }
})