// constants file to translate keyboard keys (e.g. a, s) into frequencies 
// (i.e. tones) which we will need to create Notes.

export const TONES = { // TONES constant, a JavaScript object mapping key names to frequencies. 
  'a': 523.25,
  'w': 554.37, // # 
  's': 587.33,
  'e': 622.25, // #
  'd': 659.25,
  'f': 698.46,
  't': 739.99, // #
  'g': 783.99,
  'y': 830.61, // #
  'h': 880.00,
  'u': 932.33, // #
  'j': 987.77,
  'k': 1046.5,
  'o': 1108.73, // #
  'l': 1174.66
};


export const NOTE_NAMES = Object.keys(TONES); // this exports the keys of tones ("a...l")