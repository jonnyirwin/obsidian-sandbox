function getNoteType(title) {
  const projectRegex = /^p\s*-\s*/i;
  const areaRegex = /^a\s*-\s*/i;
  const resourceRegex = /^r\s*-\s*/i;

  switch (true) {
    case projectRegex.test(title):
      return "#type/project";
    case areaRegex.test(title):
      return "#type/area";
    case resourceRegex.test(title):
      return "#type/resource";
  }

  return "#type/note";
}

module.exports = getNoteType;
