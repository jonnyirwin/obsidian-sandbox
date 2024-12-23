# Setting up a new Second Brain
## Create base folders and files
### Folders to create
- A - Inbox
- B - Notes
- C - Media
- D - Templates
- E - Scripts
### Files to create
- [[001 - Projects]]
- [[002 - Areas]]
- [[003 - Resources]]
- [[004 - Archives]]

## Configuring settings
- Settings
	- Options
		- Editor
			- Properties in document - **hidden**
			- Vim key bindings - **true**
		- Files and links
			- Automatically update internal links - **true**
			- Folder to create new notes in - **B - Notes**
			- Default location for new attachments - **In the folder specified below**
				- Attachment folder path - **C - Media**
		- Appearance
			- Themes - install *Catppuccin* (**Note** - needs the Style Settings plugin)
			- Interface font - **Inter**
			- Text font - **Inter**
			- Monospace font - **Andale Mono** (to be changed to Intel One Mono or Dank Mono)
			- Show inline title - **false**
		- Hotkeys
		- Core plugins
			- Properties view - **true**
		- Community plugins
			- Dataview
			- Metabind
			- QuickAdd
			- Style Settings
			- Templater
			- Tasks
	- Core plugins
		- Daily Notes
			- New file location - **A - Inbox**
			- Template file location - **D - Templates/(Template) - Daily Note**
	- Community plugins
		- Dataview
			- Enable Inline Queries - **true** (currently not enabled)
			- Enable JavaScript Queries - **true**
		- QuickAdd
		- Style Settings
			- Catppuccin Accents
				- Theme accent - **Teal**
		- Templater
			- Template folder location - **D - Templates**
			- Trigger Templater on new file creation - **true**
			- Folder Templates
				- Add new 
				- **B - Notes** - **D - Templates/(Template) - Note.md
			- User script functions
				- Script files folder location - **E -Scripts**
		- Metabind
			- Enable JavaScript
## TODO
- [ ] Next Actions
- [ ] Top level MOCs
	- [ ] Projects
	- [ ] Areas
	- [ ] Resources
	- [ ] Archives
- [ ] Meetings - automatically pickup project that it is under - using a quickadd macro which allows you to run user scripts and access the obsidian and quickadd apis.
- [ ] TODOs
- [ ] Back and forward on daily notes
- [ ] Startup page with keyboard shortcuts
- [ ] Project daily actions (form of TODOs)
- [ ] change priority/status of Projects from MOC 
- [ ] Move to data core instead of dataview
- [ ] Really not sure if meta b£ind is needed at all - if can set sensible keyboard shortcuts for quickadd macros

### Help
- In Dataview, use `console.log` to show the properties that can be used in code: **Ctrl+Shift+I**