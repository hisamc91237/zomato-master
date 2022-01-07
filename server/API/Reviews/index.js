// libarary
import express from "express";

//Database Modal
import { ReviewModel } from "../../database/allModels";

const Router = express.Router();

/**
 * Route        /:res_id
 * Des          GET all reviews of particular restuarant
 * params       resid
 * Access       Public
 * Method       GET
 */
Router.get("/:resid", async (req, res) => {
  try {
    const { resid } = req.params;
    const reviews = await ReviewModel.find({ restuarants: resid });

    return res.json({ reviews });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Route        /new
 * Des          POST : Adding food/Restuarnt  review and rating
 * params       none
 * Access       Public
 * Method       POST
 */
Router.post("/new", async (req, res) => {
  try {
    const { reviewData } = req.body;

    await ReviewModel.create({ ...reviewData });

    return res.json({ reviews: " Successfully Created a Review " });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Route        /delete
 * Des          delete a specific review
 * params       _id
 * Access       Public
 * Method       DELETE
 */
Router.delete("/delete/:_id", async (req, res) => {
  try {
    const { _id } = req.params;

    await ReviewModel.findByAndDelete(_id);

    return res.json({ review: "Succcessfully Deleted the Review" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
