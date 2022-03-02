import React from 'react';
import {StyleSheet, View, TextInput, Image} from 'react-native';
import Theme from '../../assets/theme';
import Strings from '../../locale';
const SearchBox = ({searchBarViewStyle}) => {
  return (
    <View style={[styles.searcheBoxContainerStyle, searchBarViewStyle]}>
      <Image
        style={styles.searchIconStyle}
        source={require('../../assets/images/icons/search_dark.png')}
      />
      <TextInput placeholder={Strings.search} style={styles.textInputStyle} />
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  searcheBoxContainerStyle: {
    backgroundColor: Theme.COLORS.SEARCH_BOX_BG,
    width: '90%',
    height: 40,
    borderRadius: 10,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  searchIconStyle: {
    height: 20,
    width: 20,
    marginHorizontal: 10,
  },
  textInputStyle: {width: '90%'},
});
