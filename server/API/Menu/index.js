// libraries
import express from "express";

// Database modal
import { MenuModel, ImageModel } from "../../database/allModels";

const Router = express.Router();

/**
 * Route        /list
 * Des          get all list menu based on Restaurant id
 * params       _id
 * Access       Public
 * Method       GET
 */
Router.get("/list/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const menu = await MenuModel.findById(_id);

    if (!menu) {
      res.status(404).json({ error: "No menu present for this Restaurant" });
    }

    return res.json({ menus });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Route        /image
 * Des          get all list of menu images with Restaurant id
 * params       _id
 * Access       Public
 * Method       GET
 */
Router.get("/image/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const menuImages = await ImageModel.findOne(_id);

    return res.json({ menuImages });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
