const Club = require("../models/Club");
exports.getClubs = async (req, res, next) => {
  try {
    const clubs = await Club.find();
    res.status(200).json({ success: true, count: clubs.length, data: clubs });
  } catch (error) {
    res.status(400).json({ success: false, msg: error.message });
  }
};

exports.getClubById = async (req, res, next) => {
  try {
    const club = await Club.findById(req.params.id);
    if (!club) {
      return res.status(404).json({ success: false, msg: "invalid address" });
    }
    res.status(200).json({ success: true, count: club.length, data: club });
  } catch (error) {
    res.status(400).json({ success: false, msg: error.message });
  }
};

exports.createClubs = async (req, res, next) => {
  try {
    const clubs = await Club.create(req.body);
    res.status(201).json({ success: true, count: clubs.length, data: clubs });
  } catch (error) {
    res.status(400).json({ success: false, msg: error.message });
  }
};

exports.updateClub = async (req, res, next) => {
  try {
    const club = await Club.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!club) {
      return res
        .status(400)
        .json({ sucess: false, message: `Fail to update ${req.params.id}` });
    }
    res.status(200).json({
      sucess: true,
      data: {
        msg: `club with id: ${req.params.id} has already updated`,
        updated_data: club,
      },
    });
  } catch (e) {
    res.status(400).json({
      sucess: false,
      message: `Fail to update content with this id: ${req.params.id}`,
    });
  }
};

exports.deleteClubById = async (req, res, next) => {
  try {
    const club = await Club.findByIdAndDelete(req.params.id);
    if (!club) {
      return res.status(400).json({ sucess: false });
    }
    res.status(200).json({
      sucess: true,
      data: {
        msg: "club with id: " + req.params.id + " Has already deleted",
      },
    });
  } catch (error) {
    res.status(400).json({ sucess: false, msg: `${error.message}` });
  }
};
