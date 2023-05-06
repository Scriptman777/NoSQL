db.garbageCan.createIndex({garbageType: 1, volume: 1})

const aggrSumResult = db.garbageCan.aggregate([
    {
      $group: {
        _id: null,
        totalVolume: {
          $sum: {
            $cond: {
              if: { $eq: ["$garbageType", "Nebezpečný"] },
              then: "$volume",
              else: 0
            }
          }
        }
      }
    },
    {
      $project: {
        totalVolume: 1,
        _id: 0
      }
    }
  ]).toArray()