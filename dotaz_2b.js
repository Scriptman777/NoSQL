const landfills = db.location.aggregate([
    {
      $lookup: {
        from: "landfill",
        localField: "_id",
        foreignField: "location",
        as: "landfill"
      }
    },
    {
      $match: {
        "landfill.percentFilled": { $lt: 10 }
      }
    },
    {
      $project: {
        "landfill.percentFilled": 1,
        city: 1,
        street: 1,
        streetNumber: 1
      }
    }
  ]).toArray()