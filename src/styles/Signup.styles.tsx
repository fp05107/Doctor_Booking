import {StyleSheet} from 'react-native';
import Globals from '../config/constants.config';
import {COLORS} from '../config/colors.config';

const styles = StyleSheet.create({
  fbGoogleBtn: {
    flexDirection: 'row',
    backgroundColor: COLORS.InputBtnColor,
    padding: 12,
    width: '45%',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 5,
  },
});

export default styles;
