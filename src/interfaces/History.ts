export type History = {
  company?: string
  mode: string
  run: string
  obs: string
  date: string
  material: string
  results: {
    peak: string
    tl: string
    ce: string
    ts?: string
    c?: string
    si?: string
    teu?: string
    ter?: string
    rec?: string
    ef: string
  }
  data: HistoryData[]
}

export type HistoryData = {
  hour: string
  temperature: string
  derivative: string
}
