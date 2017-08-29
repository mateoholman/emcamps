const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
cost surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = app => {
  app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      body,
      subject,
      recipients: recipiets.split(',').map(email => ({
        email.trim()
      })),
      _user: req.user.id,
      dateSent: Date.now()
    });

    //Send the e-mail after the survey is saved
    const mailer = new Mailer(survey, surveyTemplate(survey));
  });
};
