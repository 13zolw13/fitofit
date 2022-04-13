import { formatISO } from 'date-fns'

export const formatStringToIso = (notIsoString: string): string => {
  const timestamp = Date.parse(notIsoString.toString());
  const dateObject = new Date(timestamp);
  const isoString = formatISO(dateObject);
  return isoString;
}