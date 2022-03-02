export const handleName = (value: string) => {
  const fullName = value.split(" ");
  const firstName = fullName[0];
  const lastName = fullName[fullName.length - 1];
  const reducedName = `${firstName} ${lastName}`;

  return { firstName, lastName, reducedName };
};

export const handleDate = (usualBRFormart: string) => {
  const splitDate = usualBRFormart.split("/");
  const usualUSAFormart = `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`;

  return new Date(usualUSAFormart);
};
