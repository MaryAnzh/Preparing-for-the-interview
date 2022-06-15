export interface Itheme {
  name: string,
  isSubThemeShow: boolean,
  subTheme: IsubTheme[],
}

export interface IsubTheme {
  name: string,
  description: string[],
  progress: boolean,
  url: string,
}
