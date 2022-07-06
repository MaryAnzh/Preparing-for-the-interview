export interface Itheme {
  name: string,
  isSubThemeShow: boolean,
  subTheme: IsubTheme[],
}

export interface IsubTheme {
  name: string,
  description: IDescription[],
  progress: boolean,
}

export interface IDescription {
  name: string,
  progress: boolean,
  date: Date | null,
  url: string,
  sourse?: string
}
