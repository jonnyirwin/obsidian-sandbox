# Areas - MOC #

```dataviewjs
dv.table(['Area'],
	[...dv.pages("#type/area")]
		.filter(page => !page.file.path.toLowerCase().startsWith('(template)'))
		.filter(page => page.status === "#status/active")
		.sort()
		.map(page => [page.file.link])
		
)
```
