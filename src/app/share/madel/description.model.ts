export interface IMethods {
  name: string,
  descriptions: string[],
  returnValue: string,
  code: ICodeDescription[]
}

export interface ICodeDescription {
  description: string,
  code: string,
}
