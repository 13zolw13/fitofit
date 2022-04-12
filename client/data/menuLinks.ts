type menuLink = {
  id: string,
  title: string,
  href: string,
}

const data = [['addworkout', 'Add workout', '/addworkout'], ['logs', 'Workout Tracker', '/log'], ['ranking', 'Top 10', '/ranking']];

export const menuLinks: menuLink[] = data.map((element) => ({
  id: element[0],
  title: element[1],
  href: element[2],
}))