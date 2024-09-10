function emailCreate (emailInfo){
  if (typeof emailInfo !== 'object'){
    return 'invalid';
  }

  if(emailInfo.birthYear.toString().length !== 4){
    return 'invalid';
  }
  if(emailInfo.name,emailInfo.birthYear,emailInfo.siteName === undefined){
    return 'invalid';
  }

  let siteFirstLetter = emailInfo.siteName[0].toUpperCase();
  let email = siteFirstLetter + emailInfo.siteName.slice(1) + '#' + emailInfo.name + '@' + emailInfo.birthYear;
  return email;
}



const emailInfo = {
  name : 'kolimuddin',
  birthYear : 1999,
  siteName : 'google'
}
// let emailInfo = 10;
const returnEmail = emailCreate(emailInfo);
console.log(returnEmail);
