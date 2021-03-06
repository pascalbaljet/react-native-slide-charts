import { Platform, Dimensions } from 'react-native'
import * as Haptics from 'expo-haptics'

export const isAndroid = () => {
  return Platform.OS === 'android'
}

export const isIOS = () => {
  return Platform.OS === 'ios'
}

export const vw = (
  percentageWidth: number,
  rounded: boolean = false
): number => {
  const value = Dimensions.get('window').width * (percentageWidth / 100)
  return rounded ? Math.round(value) : value
}

export const reactNativeHapticSelectionIOS = () => {
  if (isIOS()) {
    Haptics.selectionAsync()
  }
}
