import { Platform, Easing } from 'react-native';
import { Colors } from './Colors';
import { Styles } from './Styles';

export const Customs = {
  GradientFullscreen: {
    locations: [0, 0.9],
    start: { x: 0, y: 0 },
    end: { x: 0, y: 1 },
    colors: Colors.gradient_primary,
  },
}