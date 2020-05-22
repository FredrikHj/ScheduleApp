/* ================================================== HeadBar ==================================================
 Handles the domain public dev or online pulished */
export let localPubAppUrls = () => {
  let correctDomain = '';
  let domainHostname = window.location.hostname;

  // Check if in local or pub mode 
  if (domainHostname === 'localhost' || domainHostname === 'fredrikhj.github.io') correctDomain = '/'; 
 
  return correctDomain;
}
// Handles correct read of the url = /?????
export let correctRoutes = () => {
  let routeName = window.location.hash.split('#')[1];
  return routeName;
}