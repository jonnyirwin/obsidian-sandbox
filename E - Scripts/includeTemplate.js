function includeTemplate(title) {
  const projectRegex = /^p\s*-\s*/i;
  const areaRegex = /^a\s*-\s*/i;
  const resourceRegex = /^r\s*-\s*/i;

  switch (true) {
    case projectRegex.test(title):
      return "[[(Template) - Project]]";
    case areaRegex.test(title):
      return "[[(Template) - Area]]";
    case resourceRegex.test(title):
      return "[[(Template) - Resource]]";
  }

  return title;
}

module.exports = includeTemplate;
