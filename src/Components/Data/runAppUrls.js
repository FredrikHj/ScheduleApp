export let runAppExtUrls = () => {
  let localPubUrl = '';
  let appUrl = window.location;
  console.log("runAppExtUrls -> appUrl", appUrl.pathname)

  
  ////console.log(appUrl.pathname.split('/')[1]);
  
  // Check if ther is any components that can be reuse
  //if(appUrl.pathname.split('/')[1] === 'LogIn') localPubUrl = appUrl.pathname.split('/')[1];
  
  // Check if in dev or pub mode´; 
  if (appUrl.hostname === 'localhost') localPubUrl = '/';
  if (appUrl.hostname === 'fredrikhj.github.io') localPubUrl = '/ScheduleApp/';
  
  //console.log(localPubUrl);
  
  return localPubUrl;
}
export let runAppIntUrls = () => {
  let appUrl = window.location;  
  console.log("runAppIntUrls -> appUrl", appUrl.pathname)
  return appUrl;
}