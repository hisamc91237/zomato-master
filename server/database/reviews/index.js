import mongoose  from "mongoose";

const ReviewSchema = new mongoose.Schema(
    {
        food: {type: mongoose.Types.ObjectId , ref: "Foods"},
        restuarants: {type: mongoose.Types.ObjectId , ref: "Restuarants"},
        user: {type: mongoose.Types.ObjectId , ref: "Users"},
        rating: {type: Number, required: true},
        reviewText: {type: String, required: true},
        isRestuarantReview: Boolean,
        isFoodReview: Boolean,
        photos: [
            {
                type:mongoose.Types.ObjectId,
                ref: "Images",
            },
        ],
  },
  {
      timestamps: true,
  }
);

export const ReviewModel = mongoose.model("Reviews", ReviewSchema);