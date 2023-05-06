use('GarbageCollectors');
print("This script counts the number of garbage cans by type in Praha.")

const garbageCanGroups = db.garbageCan.aggregate([
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
            "location.city": "Praha"
        }
    },
    {
        $group: {
            _id: "$garbageType",
            count: { $sum: 1 }
        }
    },
    {
        $project: {
            garbageType: "$_id",
            count: 1,
            _id: 0
        }
    }
]).toArray()

if (!garbageCanGroups.length == 0) {
    print("Garbage cans in Praha:")
    garbageCanGroups.forEach(garbageGroup => {
        print(garbageGroup.garbageType + " : " + garbageGroup.count)
    })
} else {
    print("0 garbage cans found.")
}