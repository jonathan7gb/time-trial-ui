export interface FeedRecente {
  carroId: string;
  tempoVoltaMs: number;
  timestampMs: number;
  agrupador: string;
}

export interface PodioGlobal {
  carroId: string;
  melhorTempoMs: number;
}

export interface PainelSaidaDTO {
  podio: PodioGlobal[];
  recentes: FeedRecente[];
}