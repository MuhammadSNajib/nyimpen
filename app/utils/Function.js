import { Platform, PermissionsAndroid } from 'react-native'

export class Function {


  static getRandomColor(string) {
    var color = "";
    var charCode = string.length;
    
    if (charCode >= 1 && charCode <= 3) {
      color = '#ad8834';
    } else if (charCode >= 4 && charCode <= 6) {
      color = '#1fa0e5';
    } else if (charCode >= 7 && charCode <= 9) {
      color = '#e5571f';
    } else if (charCode >= 10 && charCode <= 13) {
      color = '#1f78e5';
    } else if (charCode >= 14 && charCode <= 16) {
      color = '#ac399f';
    } else if (charCode >= 17 && charCode <= 19) {
      color = '#32c6dc';
    } else if (charCode >= 20 && charCode <= 23) {
      color = '#26c59b';
    } else if (charCode >= 24 && charCode <= 26) {
      color = '#E57D1E';
    } else if (charCode >= 27 && charCode <= 29) {
      color = '#8539AC';
    } else if (charCode >= 30 && charCode <= 33) {
      color = '#3296DC';
    } else if (charCode >= 34 && charCode <= 36) {
      color = '#26C56A';
    } else if (charCode >= 37 && charCode <= 39) {
      color = '#C4BA25';
    } else if (charCode >= 40 && charCode <= 43) {
      color = '#c55326';
    } else if (charCode >= 44 && charCode <= 46) {
      color = '#26c0c5';
    } else if (charCode >= 47 && charCode <= 49) {
      color = '#c52643';
    } else if (charCode >= 50 && charCode <= 53) {
      color = '#95c526';
    } else if (charCode >= 54 && charCode <= 56) {
      color = '#c52658';
    } else if (charCode >= 57 && charCode <= 59) {
      color = '#268dc5';
    } else if (charCode >= 60 && charCode <= 63) {
      color = '#7526c5';
    } else if (charCode >= 64 && charCode <= 66) {
      color = '#34AD4C';
    } else if (charCode >= 67 && charCode <= 69) {
      color = '#3458AD';
    } else if (charCode >= 70 && charCode <= 73) {
      color = '#AD3495';
    } else if (charCode >= 74 && charCode <= 76) {
      color = '#3486ad';
    } else if (charCode >= 77 && charCode <= 79) {
      color = '#ab34ad';
    } else if (charCode >= 80 && charCode <= 83) {
      color = '#297a24';
    } else if (charCode >= 84 && charCode <= 86) {
      color = '#247a6c';
    } else if (charCode >= 87 && charCode <= 89) {
      color = '#95792d';
    } else if (charCode >= 90 && charCode <= 93) {
      color = '#ba8b08';
    } else if (charCode >= 94 && charCode <= 96) {
      color = '#ba1108';
    } else {
      color = '#324150';
    }

    return color;
  }

  static generateHslColors(string, tmp) {
    const rnd = (min, max) => { return Math.floor(Math.random() * (max - min + 1) + min); };

    let colors;
    let hue = string.length
    let saturation = string.length
    let lightnes = string.length

    if (tmp == 'chocolate') {
      colors = `hsl(${0}, ${rnd(saturation + 15, 26)}%, ${rnd(lightnes + 17, 33)}%)`;
    } else if (tmp == 'yellow') {
      colors = `hsl(${44}, ${rnd(saturation + 55, 100)}%, ${rnd(lightnes + 40, 68)}%)`;
    } else {
      colors = `hsl(${354}, ${79}%, ${62}%)`;
    }
    return colors
  }

}