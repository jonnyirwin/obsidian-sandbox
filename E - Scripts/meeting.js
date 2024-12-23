module.exports = async (params) => {
	const { app, quickAddApi: {inputPrompt}, variables } = params;
	const currentPage = app.workspace.getActiveFile();
	const cache = app.metadataCache.getFileCache(currentPage);
	const projects = cache?.frontmatter?.projects;
	console.log({ currentPage, cache, projects });
	const input = await inputPrompt("test", "enter a project name", projects[0]);
	variables.project = input;
};
