function getNoteTitle(title) {
  return title.replace(/^.\s*-\s*/i, "");
}

module.exports = getNoteTitle;
