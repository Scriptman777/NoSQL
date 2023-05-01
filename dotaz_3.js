use('GarbageCollectors');
print("This script will find all Skoda cars that have homeLandfill in Praha.")
const vehicles = db.vehicle.aggregate([
  {
    $lookup: {
      from: "landfill",
      localField: "homeLandfill",
      foreignField: "_id",
      as: "landfill"
    }
  },
  {
    $lookup: {
      from: "location",
      localField: "landfill.location",
      foreignField: "_id",
      as: "locationInfo"
    }
  },
  {
    $match: {
      "locationInfo.city": "Praha",
      "make": "Skoda"
    }
  },
  {
    $project: {
      _id: 0,
      make: 1,
      licencePlate: 1,
      capacity: 1
    }
  }
]).toArray()

if (!vehicles.length == 0) {
  print("Cars:")
  vehicles.forEach(vehicle => {
    print("Make: " + vehicle.make + ", licence plate: " + vehicle.licencePlate + ", capacity: " + vehicle.capacity)
  })
} else {
  print("0 cars found.")
}
