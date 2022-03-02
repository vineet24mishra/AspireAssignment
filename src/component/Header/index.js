import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import Theme from '../../assets/theme';

const Header = ({onBackPress, isBackBtnShow}) => {
  return (
    <View style={[styles.headerViewContainer, {justifyContent : !isBackBtnShow ? 'flex-end' : "space-between"}]}>
      {isBackBtnShow && <TouchableOpacity onPress={onBackPress}>
      <Image style={styles.backButtonStyle} source={require('../../assets/images/icons/back.png')} />
      </TouchableOpacity>}
      <Image
        style={styles.headerLogoStyle}
        source={require('../../assets/images/icons/Home.png')} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerViewContainer: {
    width: '100%',
    flexDirection: 'row',
    height: Theme.SIZES.ACTION_BAR_HEIGHT,
    padding: 20,
    backgroundColor: Theme.COLORS.SECONDARY,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  backButtonStyle: {
    width: 30,
    height: 30
  },
  headerLogoStyle: {
    tintColor: Theme.COLORS.PRIMARY
  }
});
