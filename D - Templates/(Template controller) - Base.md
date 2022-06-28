<% await tp.file.rename(tp.user.renameFile(tp.file.title)) %>
<% tp.file.include('[[(Partial template) - Frontmatter]]') %>

# <% tp.user.getNoteTitle(tp.file.title) %> #
<% tp.file.include(tp.user.includeTemplate(tp.file.title)) %>

<% tp.file.include('[[(Partial template) - Housekeeping]]') %>
