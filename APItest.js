use('GarbageCollectors');


// Adding a garbageCan with location

// Inputs
var gpsLon = 12.123
var gpsLat = 12.123
var city = "Helsinki"
var street  = "Kauppakatu"
var streetNumber = "12"
var garbageType = "Plastic"
var volume = 120

// Business Logic
var newLoc = db.location.insertOne({ 
    "gpsLon": gpsLon,
    "gpsLat": gpsLat,
    "city": city,
    "street": street,
    "streetNumber": streetNumber
})
var newGarbageCan = db.garbageCan.insertOne({
    "garbageType": garbageType,
    "volume": volume,
    "location": newLoc.insertedId
})


/*

mongosh does not like large functions in the code, so here is at least an example of what I was trying to do:


function addGarbageCan(garbageType, volume, gpsLon, gpsLat, city, street, streetNumber){
    var newLoc = db.location.insertOne({ 
        "gpsLon": gpsLon,
        "gpsLat": gpsLat,
        "city": city,
        "street": street,
        "streetNumber": streetNumber
    })
    var newGarbageCan = db.garbageCan.insertOne({
        "garbageType": garbageType,
        "volume": volume,
        "location": ObjectId(newLoc.insertedId)
    })
    return newGarbageCan
}

function addGarbageCan(garbageType, volume, gpsLon, gpsLat){
    addGarbageCan(garbageType, volume, gpsLon, gpsLat, null, null, null)

}
*/



// Create garbageCollection for a small village (all cans get added)

// Insert few objects into the database (normally these would exist before the API call) 

var testLoc = db.location.insertOne({ 
    "gpsLon": 11.111,
    "gpsLat": 11.111,
    "city": "Bohuslavice"
})

db.garbageCan.insertOne({
    "garbageType": "Plastic",
    "volume": 120,
    "location": testLoc.insertedId
})

db.garbageCan.insertOne({
    "garbageType": "Metal",
    "volume": 120,
    "location": testLoc.insertedId
})

db.garbageCan.insertOne({
    "garbageType": "Paper",
    "volume": 120,
    "location": testLoc.insertedId
})

var testLandfill = db.landfill.insertOne({
    "location": testLoc.insertedId,
    "capacity": 500000,
    "operational": true,
    "collectionsPerfomed": [],
    "percentFilled": 1
})

db.vehicle.insertOne({
    "licencePlate":"1H2 3456",
    "capacity": 2000,
    "homeLandfill": testLandfill.insertedId,
    "model": "123GarbageTruck-XL",
    "make": "Scania"
})



// Inputs
var city = "Bohuslavice"
var dayOfCollection = "Friday"
var vehicleLicencePlate = "1H2 3456"

// Business Logic

var vehicle = db.vehicle.findOne({ "licencePlate": vehicleLicencePlate })

var cans = db.garbageCan.aggregate(
    [
        {
            $lookup: {
                from:"location",
                localField: "location",
                foreignField: "_id",
                as: "aggrLocation"
            }
        },
        {
            $match: {
                "aggrLocation.city": "Bohuslavice"
            }
        },
        {
            $project: { _id: 1 }
        }
    ]
).map(function(item){ return item._id; }).toArray()

db.garbageCollection.insertOne({
    "assignedVehicle": vehicle._id,
    "dayOfCollection": dayOfCollection,
    "cans": cans
})

