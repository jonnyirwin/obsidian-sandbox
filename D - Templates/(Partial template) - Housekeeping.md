>[! summary]- Housekeeping
>
> status:: #status/active
>type::  <% tp.user.getNoteType(tp.file.title) %>
>areas:: 
>```dataviewjs
>		dv.el('div', `lastUpdated: ${dv.current().file.ctime}`)
>		dv.el('div', `projects: `)
>```