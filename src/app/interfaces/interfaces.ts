export interface ExchangeInterface {
    base: string,
    date: string,
    rates: Map<string,number>
}

export interface Config {
  base: string,
  goal: string
}
