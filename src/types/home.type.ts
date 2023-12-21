interface Iineage {
  rank: string;
  name: string;
  tax_id: number; //eslint-disable-line
}

interface Columns {
  id: string;
  metadata: null;
}

export interface Rows {
  id: string;
  metadata: {
    taxonomy: string[];
    tax_id: number; //eslint-disable-line
    title: string;
    lineage: Iineage[];
    id: string;
  };
}

export interface DataType {
  id: string;
  format: string;
  format_url: string; //eslint-disable-line
  matrix_type: string; //eslint-disable-line
  generated_by: string; //eslint-disable-line
  date: string;
  type: string;
  matrix_element_type: string; //eslint-disable-line
  shape: [number, number];
  data: number[][];
  rows: Rows[];
  columns: Columns[];
  metadata: {
    analysis_id: string; //eslint-disable-line
    name: string;
    database: string;
    created: string;
    database_feature: string; //eslint-disable-line
    biom_version: number; //eslint-disable-line
    filterset_name: string; //eslint-disable-line
    filterset_id: string; //eslint-disable-line
  };
}
