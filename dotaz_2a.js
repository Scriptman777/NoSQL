use('GarbageCollectors');
print("This script finds all landfills with percentFilled lower than 10%.")

db.garbageCan.createIndex({garbageType: 1, volume: 1})

const landfills = db.landfill.aggregate([
  {
    $lookup: {
      from: "location",
      localField: "location",
      foreignField: "_id",
      as: "location"
    }
  },
  {
    $match: {
      percentFilled: { $lt: 10 }
    }
  },
  {
    $project: {
      percentFilled: 1,
      "location.city": 1,
      "location.street": 1,
      "location.streetNumber": 1
    }
  }
]).toArray();
landfills.forEach(landfill => {
  print(landfill.location[0].city + ", " + landfill.location[0].street + " " + landfill.location[0].streetNumber + ". Percent filled: " + landfill.percentFilled + "%")
})

if (landfills.length == 0) {
  print("No landfill with percentFilled less than 10 found.")
}