import express from "express";
const router = express.Router();
router.post("/api/users/signin", (req, res) => {
  res.send("sign word");
});

export { router as signin };
