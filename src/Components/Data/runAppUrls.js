export let localPubAppUrls = () => {
  let correctDomain = '';
  let appUrlHostname = window.location.hostname;
  
  // Check if in local or pub mode 
  if (appUrlHostname === 'localhost') correctDomain = '/';
  if (appUrlHostname === 'fredrikhj.github.io') correctDomain = '/ScheduleApp/';
 
  return correctDomain;
}
export let correctRoutes = () => {
  let correctRouteName = '';
  let appUrlHostname = window.location.hostname;
  let routeName = window.location.pathname;
  console.log("runAppUrls -> appUrl", routeName)


  
  ////console.log(appUrl.pathname.split('/')[1]);
  
  // Check if ther is any components that can be reuse
  //if(appUrl.pathname.split('/')[1] === 'LogIn') localPubUrl = appUrl.pathname.split('/')[1];
  
  // Check if in dev or pub mode´; 
  if (appUrlHostname === 'localhost') correctRouteName = routeName;
  if (appUrlHostname === 'fredrikhj.github.io') correctRouteName = `/ScheduleApp${routeName}`;
 
  return correctRouteName;
}