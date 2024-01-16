import { CloudMonitoringQuery as CloudMonitoringQueryBase, QueryType } from '../dataquery.gen';

export { QueryType };
export {
  type TimeSeriesList,
  PreprocessorType,
  type TimeSeriesQuery,
  type SLOQuery,
  type MetricQuery,
  MetricKind,
  type LegacyCloudMonitoringAnnotationQuery,
  type Filter,
  AlignmentTypes,
  ValueTypes,
  MetricFindQueryTypes,
  type PromQLQuery,
} from '../dataquery.gen';

/**
 * Represents the query as it moves through the frontend query editor and datasource files.
 * It can represent new queries that are still being edited, so all properties are optional
 */
// TODO: This is a workaround until the type extensions issue is resolved in CUE
export interface CloudMonitoringQuery extends CloudMonitoringQueryBase {
  queryType?: QueryType;
}
