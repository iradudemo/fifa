const Players = require("../models/Players");
exports.getPlayers = async (req, res, next) => {
  try {
    const players = await Players.find();
    res
      .status(200)
      .json({ success: true, count: players.length, data: players });
  } catch (error) {
    res.status(400).json({ success: false, msg: error.message });
  }
};

exports.getPlayerById = async (req, res, next) => {
  try {
    const player = await Players.findById(req.params.id);
    if (!player) {
      return res.status(404).json({ success: false, msg: "invalid address" });
    }
    res.status(200).json({ success: true, count: player.length, data: player });
  } catch (error) {
    res.status(400).json({ success: false, msg: error.message });
  }
};

exports.registerPlayer = async (req, res, next) => {
  try {
    const player = await Players.create(req.body);
    res.status(201).json({ success: true, count: player.length, data: player });
  } catch (error) {
    res.status(400).json({ success: false, msg: error.message });
  }
};

exports.updatePlayer = async (req, res, next) => {
  try {
    const player = await Players.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!player) {
      return res
        .status(400)
        .json({ sucess: false, message: `Fail to update ${req.params.id}` });
    }
    res.status(200).json({
      sucess: true,
      data: {
        msg: `player with id: ${req.params.id} has already updated`,
        updated_data: player,
      },
    });
  } catch (e) {
    res.status(400).json({
      sucess: false,
      message: `Fail to update content with this id: ${req.params.id}`,
    });
  }
};

exports.deletePlayerById = async (req, res, next) => {
  try {
    const player = await Players.findByIdAndDelete(req.params.id);
    if (!player) {
      return res.status(400).json({ sucess: false });
    }
    res.status(200).json({
      sucess: true,
      data: {
        msg: "player with id: " + req.params.id + " Has already deleted",
      },
    });
  } catch (error) {
    res.status(400).json({ sucess: false, msg: `${error.message}` });
  }
};
