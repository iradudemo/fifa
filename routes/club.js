const express = require("express");
const {
  getClubs,
  createClubs,
  getClubById,
  deleteClubById,
  updateClub,
} = require("../controllers/clubs");

const router = express.Router();

router.route("/").post(createClubs).get(getClubs);
router.route("/:id").get(getClubById).delete(deleteClubById).put(updateClub);
module.exports = router;
