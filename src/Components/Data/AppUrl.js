export let runAppUrl = () => {
    let localPubUrl = '';
    let appUrl = window.location.hostname;
    if (appUrl === 'localhost') localPubUrl = '/';
    if (appUrl === 'fredrikhj.github.io') localPubUrl = '/ScheduleApp/';
    console.log(localPubUrl);
    
    return localPubUrl;
  }