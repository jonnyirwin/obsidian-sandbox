# Archives - MOC #

## Projects ##

```dataviewjs
dv.table(['Project'],
	[...dv.pages("#type/project")]
		.filter(page => !page.file.path.toLowerCase().startsWith('(template)'))
		.filter(page => page.status !== "#status/active")
		.sort()
		.map(page => [page.file.link])
		
)
```

## Areas ##

```dataviewjs
dv.table(['Area'],
	[...dv.pages("#type/area")]
		.filter(page => !page.file.path.toLowerCase().startsWith('(template)'))
		.filter(page => page.status !== "#status/active")
		.sort()
		.map(page => [page.file.link])
		
)
```

## Resources ##

```dataviewjs
dv.table(['Resource'],
	[...dv.pages("#type/resource")]
		.filter(page => !page.file.path.toLowerCase().startsWith('(template)'))
		.filter(page => page.status !== "#status/active")
		.sort()
		.map(page => [page.file.link])
		
)
```
