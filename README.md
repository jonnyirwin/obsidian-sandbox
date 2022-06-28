# Jonny's Obsidian Sandbox

I have been using [Obsidian](https://obsidian.md/) for a while for my personal knowledge management (PKM) needs, but after reading [Building a Second Brain by Tiage Forte](https://www.buildingasecondbrain.com/), I decided to see how I would best implement the PARA system implemented in the book, using Obsidian.

For me, at the minute, Obsidian is the best choice for PKM - my notes are stored locally on my machine (while also being synced across machine & backed up to the cloud). The use of markdown files (which I have already used extensively), the lack of vendor lock-in and the extensibility through plugins make using this an easy decision for me to use.

Having watched some videos on how to implement PARA, none of them seemed to fit in with the methods that I am already using in Obsidian. Some of my existing workflow needs to change - but some of it I like and want to keep. This sandbox incorporated both elements from my existing workflow and elements I have gleaned from the 'Building a Second Brain' book.

This sandbox is very much a work in progress.

## How to use this sandbox ##

### Setup ###
- Download and install Obsidian.
- Clone this repository and open as a vault in obsidian.

### Projects ###
- To create a new project, press **Ctrl + o** and enter the name of the project, prefixed with **p -** e.g **p - My First Project**.
- Press **Enter**.
- The file will automatically get renamed and apply the **(Template) - Project** template.
- To add new files to the Project, on the project note, create a new link on the **Project Notes** list and click on this link to create a new note that will automatically be marked as being part of the project.
- On the project note, there is a priority field that sets how far up the list of active projects a project shows. Making this number lower moves it up the list and greater moves it down the list.
- A list of active projects can be seen on the **001 - Projects** MOC (map of contents), displayed in the order of priority. It is intended that this MOC would be the main entry point into the Second Brain.

### Areas (of responsibility) and Resources###
Currently the workflow for dealing with Areas and Resources is the same:
- To create a new project, press **Ctrl + o** and enter the name of the project, prefixed with **a -** for an Area, or with a **r -** for a Resource e.g **a - My First Area**, or **r - Some Resource**.
- Press **Enter**
- The file will automatically get renamed and apply the **(Template) - Area**, or **(Template) - Resource** template respectively.
- The workflow for adding notes to Areas or Resources is different to Projects. For Projects, you create a link on the project note directly, whereas for Areas or Resources you are more likely to already have a note that you want to organise into an Area of Resource. To do this, in the housekeeping call-out, add a link to the Area or Resource in the respective fields. A note can be part of multiple areas or resources - these should be created as comma-separated links.

### Archives ###
- To archive a Project, Area or Resource, on the housekeeping section of the page, change the status field to anything other than #status/active e.g. #status/on-hold, #status/completed or #status/cancelled.
- Doing this will remove the Project, Area or Resource from the respective active MOC and will add it to lists on the **004 - Archives** MOC.