export let localPubAppUrls = () => {
  let correctDomain = '';

  let domainHostname = window.location.hostname;
  let appUrlHostname = window.location.hash.split('')[1];
  console.log("localPubAppUrls -> appUrlDomain", domainHostname)
  console.log("localPubAppUrl -> appUrlHostname", appUrlHostname);
  
  // Check if in local or pub mode 
  if (domainHostname === 'localhost' || domainHostname === 'fredrikhj.github.io') correctDomain = '/'; 
 
  return correctDomain;
}
export let correctRoutes = () => {
  let correctRouteName = '';
  let routeName = window.location.hash.split('#')[1];
  console.log("runAppUrls -> appUrl", routeName)


  
  ////console.log(appUrl.pathname.split('/')[1]);
  
  // Check if ther is any components that can be reuse
  //if(appUrl.pathname.split('/')[1] === 'LogIn') localPubUrl = appUrl.pathname.split('/')[1];
  
  // Check if in dev or pub mode´; 
/*   if (appUrlHostname === 'localhost') correctRouteName = routeName;
  if (appUrlHostname === 'fredrikhj.github.io') correctRouteName = `/ScheduleApp${routeName}`;
 */ 
  return routeName;
}