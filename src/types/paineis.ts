export interface FeedRecente {
  carroId: string;
  tempoVoltaMs: number;
  timestampMs: number;
  agrupador: string;
}

export interface PodioGlobal {
  carroId: string;
  tempoVoltaMs : number;
}

export interface PainelSaidaDTO {
  podio: PodioGlobal[];
  recentes: FeedRecente[];
}

export function converterTempo(tempo: string) {
  const [min, seg] = tempo.split(":")
  return Number(min) * 60 + Number(seg)
}