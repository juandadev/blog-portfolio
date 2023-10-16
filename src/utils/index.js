export const calculateRelativeDate = (year) => {
  const birthDate = new Date(year);
  const ageDifMs = Date.now() - birthDate.getTime();
  const ageDate = new Date(ageDifMs); // milliseconds from epoch
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);

  return age;
};
