# Resources  - MOC #

```dataviewjs
dv.table(['Resource'],
	[...dv.pages("#type/resource")]
		.filter(page => !page.file.path.toLowerCase().startsWith('(template)'))
		.filter(page => page.status === "#status/active")
		.sort()
		.map(page => [page.file.link])
		
)
```
