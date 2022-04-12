import { QueryDto } from 'src/dto/queryDto';

export function filterQuery(queryOptions: QueryDto) {
  if (queryOptions) {
    const { categoryWorkOut, difficulty, date, timeSplit } = queryOptions;
    const query = {};
    if (categoryWorkOut) {
      query['categoryWorkOut'] = categoryWorkOut;
    }
    if (difficulty) {
      query['difficulty'] = difficulty;
    }
    if (date) {
      query['date'] = date;
    }
    if (timeSplit === 'week') {
      query['date'] = { $gte: new Date(new Date().getTime() - 604800000) };
    }
    if (timeSplit === 'today') {
      query['date'] = { $gte: new Date(new Date().getTime() - 86400000) };
    }
    return query;
  }
}
