// Code generated - EDITING IS FUTILE. DO NOT EDIT.
//
// Generated by:
//     public/app/plugins/gen.go
// Using jennies:
//     TSTypesJenny
//     LatestMajorsOrXJenny
//     PluginEachMajorJenny
//
// Run 'make gen-cue' from repository root to regenerate.

import * as common from '@grafana/schema';

export const pluginVersion = "10.3.4";

export enum QueryEditorMode {
  Builder = 'builder',
  Code = 'code',
}

export type PromQueryFormat = ('time_series' | 'table' | 'heatmap');

export interface PrometheusDataQuery extends common.DataQuery {
  /**
   * Specifies which editor is being used to prepare the query. It can be "code" or "builder"
   */
  editorMode?: QueryEditorMode;
  /**
   * Execute an additional query to identify interesting raw samples relevant for the given expr
   */
  exemplar?: boolean;
  /**
   * The actual expression/query that will be evaluated by Prometheus
   */
  expr: string;
  /**
   * Query format to determine how to display data points in panel. It can be "time_series", "table", "heatmap"
   */
  format?: PromQueryFormat;
  /**
   * Returns only the latest value that Prometheus has scraped for the requested time series
   */
  instant?: boolean;
  /**
   * @deprecated Used to specify how many times to divide max data points by. We use max data points under query options
   * See https://github.com/grafana/grafana/issues/48081
   */
  intervalFactor?: number;
  /**
   * Series name override or template. Ex. {{hostname}} will be replaced with label value for hostname
   */
  legendFormat?: string;
  /**
   * Returns a Range vector, comprised of a set of time series containing a range of data points over time for each time series
   */
  range?: boolean;
}
