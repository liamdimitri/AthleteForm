const Profile = require('../models/AthleteProfile');

const profileController = {};

profileController.postProfile = async (req, res, next) => {
  try {
    const createProfile = await Profile.create({ name: req.body.name });
    res.locals.newprofile = createProfile;
    next();
  } catch(err) { 
    next({ Error: `Error is ${err} in taskController.postTask` })
  } 
};

profileController.getProfile = async (req, res, next) => {
  try {
    const findAll = await TextTrackList.find({});
    res.locals.allProfiles = findAll.map((profile) => {
      return {
        id: profile._id,
        name: profile.name,
      };
    });
    return next();
  } catch (err) {
    next({ Error: `Error is ${err} in profileController.getProfile` })
  }
};


module.exports = profileController;