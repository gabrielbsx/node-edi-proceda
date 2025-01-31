import { EdiSchema } from '../../..';

export const valoresTotaisDocumentoSchema: EdiSchema = {
  name: 'valoresTotaisDocumento',
  identifier: '318',
  params: [{
      name: 'identificadorDeRegistro',
      start: 1,
      end: 3,
      mandatory: true,
  }, {
      name: 'valorTotalDasNotas',
      start: 4,
      end: 17,
      mandatory: true,
      format: { type: 'number', precision: 2 },
  }, {
      name: 'pesoTotalDasNotas',
      start: 19,
      end: 33,
      mandatory: true,
      format: { type: 'number', precision: 2 },
  }, {
      name: 'pesoTotalDensidadeCubagem',
      start: 34,
      end: 48,
      format: { type: 'number', precision: 2 },
  }, {
      name: 'quantidadeTotalVolumes',
      start: 49,
      end: 63,
      mandatory: true,
      format: { type: 'number', precision: 2 },
  }, {
      name: 'valorTotalASerCobrado',
      start: 64,
      end: 78,
      format: { type: 'number', precision: 2 },
  }, {
      name: 'valorTotalDoSeguro',
      start: 79,
      end: 93,
      format: { type: 'number', precision: 2 },
  }, {
      name: 'filler',
      start: 94,
      end: 240,
  }],
};

export default valoresTotaisDocumentoSchema;
