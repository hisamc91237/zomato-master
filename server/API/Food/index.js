// libraries
import express from "express";

// Database model
import { FoodModel } from "../../database/allModels";

// Validation
import { validateCategory, validateId } from "../../validation/common";

const Router = express.Router();

/**
 * Route        /
 * Des          GET all food based on particular Restaurant
 * params       none
 * Access       Public
 * Method       GET
 */
Router.get("/r/:_id", async (req, res) => {
  try {
    await validateId(req.params);
    const { _id } = req.params;
    const foods = await FoodModel.find({ Restaurant: _id });

    if (!foods)
      return res
        .status(404)
        .json({ error: `No food matched with ${category}` });

    return res.json({ foods });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Route        /c/:category
 * Des          GET all food based on particular category
 * params       none
 * Access       Public
 * Method       GET
 */
Router.get("/c/:category", async (req, res) => {
  try {
    validateCategory(req.params);
    const { category } = req.params;
    const foods = await FoodModel.find({
      category: { $regex: category, $options: "i" },
    });

    return res.json({ foods });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
