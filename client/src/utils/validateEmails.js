// eslint-disable-next-line
const emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default emails => {
  emails = emails.replace(/,\s*$/, '');
  const invalidEmails = emails
    .split(',')
    .map(email => email.trim())
    .filter(email => emailRe.test(email) === false);

  if (invalidEmails.length) {
    return `These e-mails are invalid: ${invalidEmails}`;
  } else {
    return null;
  }
};
