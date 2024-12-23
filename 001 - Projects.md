# Projects

```dataviewjs
let buttons = '`BUTTON[increase-priority,decrease-priority,pause]`';
let projectPages = dv.pages().filter(x => x.type == 'project' && x.status && x.status.toLowerCase() === "active");
let projects = projectPages.map(x => [x.file.link, x.file.frontmatter.status, x.file.frontmatter.priority, buttons]);
dv.table(['Name', 'Status', 'Priority', 'Actions'], projects);
```