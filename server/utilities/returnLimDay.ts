export function returnTodayMin(): string {
  const today = new Date().setDate(new Date().getDate());
  const convertDate = new Date(today).toISOString().slice(0, 10);
  const convertDateToISo = new Date(convertDate).toISOString();
  return convertDateToISo;
}

export function returnTodayMax(): string {
  const today = new Date().setDate(new Date().getDate() + 1);
  const convertDate = new Date(today).toISOString().slice(0, 10);
  const convertDateToISo = new Date(convertDate).toISOString();
  return convertDateToISo;
}

export function returnDate(Query: string): string {
  const dateSevenDaysAgo = new Date().setDate(
    new Date().getDate() - Number(Query),
  );
  const convertDate = new Date(dateSevenDaysAgo).toISOString().slice(0, 10);
  const convertDateToISo = new Date(convertDate).toISOString();
  return convertDateToISo;
}
