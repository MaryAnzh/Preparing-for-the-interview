export interface Itheme {
  name: string,
  subTheme: IsubTheme[],
}

export interface IsubTheme {
  name: string,
  description: string[],
  progress: boolean,
  url: string,
}
