import express from 'express'; 

const userRouter = ({userServices}) => {
  const router = express.Router();

  router.post("/registerUser", async (req, res) => {
    try {
      const credentials = req.body;
      await userServices.registerUser(credentials);
      res.status(200).json({ message: "User Created" });
    } catch (error) {
      console.log(error.message);
      return res.status(400).json({ message: error.message });
    }
  });

  return router;
};

export default userRouter;
