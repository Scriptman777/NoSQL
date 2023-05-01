use('GarbageCollectors');
print("This script finds the largest garbageCollection by volume.")
const biggestGarbageCollection = db.garbageCollection.aggregate([
    {
        $lookup: {
            from: "garbageCan",
            localField: "garbageCans",
            foreignField: "_id",
            as: "garbageCans"
        }
    },
    {
        $addFields: {
            totalVolume: {
                $sum: "$garbageCans.volume"
            }
        }
    },
    {
        $sort: {
            totalVolume: -1
        }
    },
    {
        $limit: 1
    },
    {
        $project: {
            _id: 1,
            dayOfCollection: 1,
            timeEstimate: 1,
            totalVolume: 1
        }
    }
]).toArray()

print("The collection with id: " + biggestGarbageCollection[0]._id + " and volume " + biggestGarbageCollection[0].totalVolume + " has the highest volume.")