export const calculateRelativeDate = (year) => {
  const birthDate = new Date(year);
  const ageDifMs = Date.now() - birthDate.getTime();
  const ageDate = new Date(ageDifMs); // milliseconds from epoch
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);

  return age;
};

export const splitMetadataAndContent = (markdown) => {
  const charactersBetweenGroupedHyphens = /^---([\s\S]*?)---/;
  const charactersAfterHyphens = /---[\s\S]*?---\s*([\s\S]*)/;
  const metadataMatched = markdown.match(charactersBetweenGroupedHyphens);
  const metadata = metadataMatched[1];
  const contentMatched = markdown.match(charactersAfterHyphens);
  const content = contentMatched[1];

  if (!metadata) {
    return {};
  }

  const metadataLines = metadata.split("\n");
  const metadataObject = metadataLines.reduce((accumulator, line) => {
    const [key, ...value] = line.split(":").map((part) => part.trim());

    if (key) accumulator[key] = value[1] ? value.join(":") : value.join("");
    return accumulator;
  }, {});

  return { metadata: metadataObject, content };
};
