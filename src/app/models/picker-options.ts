export interface PickerOptions {
  buttons: ButtonsPickerOptions[];
}

export interface ButtonsPickerOptions {
  text: string;
  handler: Function;
}
