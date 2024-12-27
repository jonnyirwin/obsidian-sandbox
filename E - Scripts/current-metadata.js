module.exports = async (params) => {
  let { app, variables } = params;
  const currentPage = app.workspace.getActiveFile();
  const cache = app.metadataCache.getFileCache(currentPage);

  const { frontmatter: { projects = [], areas = [], resources = [], status = "", type = "" } = {} } = cache ?? {};
  const normalisedProjects = projects.map(project => project.replace(/[\[\]]/g, ''));
  variables = Object.assign(variables, {
	  ogProj: projects,
    projects: normalisedProjects,
    firstProject: normalisedProjects ? normalisedProjects[0] : undefined,
    areas,
    firstArea: areas ? areas[0] : undefined,
    resources,
    firstResource: resources ? resources[0] : undefined,
    status,
    type
  });
  console.log('Current page metadata' , { variables });
};
