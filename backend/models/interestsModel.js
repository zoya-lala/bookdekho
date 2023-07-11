const mongoose = require("mongoose");

const interestsModel = mongoose.Schema(
    {
        owner: { type: String, required: true },
        interests: { type: String, required: true },
        book: { type: String, required: true},
    },
    {
        timestamps: true
    }
)

const Interests = mongoose.model("Interests", interestsModel);

module.exports = Interests;

// owner
// interests
// book