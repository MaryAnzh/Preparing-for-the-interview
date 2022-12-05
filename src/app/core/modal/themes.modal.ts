export interface ITheme {
  name: string,
  isSubThemeShow: boolean,
  subTheme: ISubTheme[],
}

export interface ISubTheme {
  name: string,
  description: IDescription[],
  progress: boolean,
}

export interface IDescription {
  name: string,
  progress: boolean,
  date: Date | null,
  url: string,
  source?: string
}
