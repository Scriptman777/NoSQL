use('GarbageCollectors');
print("This script calculates the total sum of garbage cans that have garbageType Dangerous.")

db.garbageCan.createIndex({garbageType: 1, volume: 1})

const aggrSumResult = db.garbageCan.aggregate([
   {
      $match: {
         garbageType: "Nebezpečný"
      }
   },
   {
      $group: {
         _id: null,
         totalVolume:
         {
            $sum: "$volume"
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

print("The sum of the volumes for Nebezpečný garbage can type is: " + aggrSumResult[0].totalVolume)