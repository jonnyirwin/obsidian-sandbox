# Projects - MOC #

```dataviewjs
dv.table(['Project', 'Priority'],
	[...dv.pages("#type/project")]
		.filter(page => !page.file.path.toLowerCase().startsWith('(template)'))
		.filter(page => page.status === "#status/active")
		.sort((a,b) => { 
			console.log({a,b});
			return a.priority - b.priority;
		})
		.map(page => [page.file.link, page.priority])
		
)
```
