
module.exports = async (params) => {
  let { app, quickAddApi: { inputPrompt }, variables } = params;
  const meetingTitle = await inputPrompt('Meeting title');
  variables.meetingTitle = meetingTitle;
  console.log('Meeting title' , { variables });
};
