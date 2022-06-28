function renameFile(title) {
  const projectRegex = /^p\s*-\s*/i;
  const areaRegex = /^a\s*-\s*/i;
  const resourceRegex = /^r\s*-\s*/i;

  switch (true) {
    case projectRegex.test(title):
      return `(Project) - ${title.replace(projectRegex, "").trim()}`;
    case areaRegex.test(title):
      return `(Area) - ${title.replace(areaRegex, "").trim()}`;
    case resourceRegex.test(title):
      return `(Resource) - ${title.replace(resourceRegex, "").trim()}`;
  }

  return title;
}

module.exports = renameFile;
