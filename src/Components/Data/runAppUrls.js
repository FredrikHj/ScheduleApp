// Handles the domain public dev or online pulished
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
// Handles correct read of the url = /?????
export let correctRoutes = () => {
  let correctRouteName = '';
  let routeName = window.location.hash.split('#')[1];
  console.log("runAppUrls -> appUrl", routeName)
  return routeName;
}