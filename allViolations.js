
/*
============================
Correct location object
============================

db.location.insertOne({
    "gpsLat": 11.1,
    "gpsLon": 11.1,
    "city": "Test City",
    "street": "Test Street",
    "streetNumber": "123A"
})
*/

try {
// Missing requirements
db.location.insertOne({
    "city": "Test City",
    "street": "Test Street",
    "streetNumber": "123A"
})
}
catch(err){
    print(err.errInfo)
}

try {
// Wrong types
db.location.insertOne({
    "gpsLat": "11.1",
    "gpsLon": "11.1",
    "city": 123,
    "street": 456,
    "streetNumber": 789
})
}
catch(err){
    print(err.errInfo)
}

/*
============================
Correct garbageCan object
============================

db.garbageCans.insertOne({
    "garbageType": "Plastic",
    "volume": 120,
    "location": ObjectId('64340a41b810aa7140dca5e4')
})
*/

try {
// Missing requirements

db.garbageCans.insertOne({
    "volume": 120,
})
}
catch(err){
    print(err.errInfo)
}

try {
// Wrong types

db.garbageCans.insertOne({
    "garbageType": 123,
    "volume": 12.5,
    "location": "Here"
})
}
catch(err){
    print(err.errInfo)
}

try {
// Value outside allowed range

db.garbageCans.insertOne({
    "garbageType": "Plastic",
    "volume": 100000,
    "location": ObjectId('64340a41b810aa7140dca5e4')
})
}
catch(err){
    print(err.errInfo)
}


/*
============================
Correct landfill object
============================

db.landfill.insertOne({
    "location": ObjectId('64340a41b810aa7140dca5e4'),
    "capacity": 500000,
    "operational": true,
    "collectionsPerfomed": [ObjectId('64340a9cb810aa7140dca5e8'),ObjectId('6437e000dae3143cfd6063d8')],
    "percentFilled": 42
})
*/

try {
// Missing requirements

db.landfill.insertOne({
    "collectionsPerfomed": [ObjectId('64340a9cb810aa7140dca5e8'),ObjectId('6437e000dae3143cfd6063d8')],
    "percentFilled": 42
})
}
catch(err){
    print(err.errInfo)
}

try {
// Wrong types

db.landfill.insertOne({
    "location": "Here",
    "capacity": 12.2,
    "operational": "Yep",
    "collectionsPerfomed": 5,
    "percentFilled": 12.3
})
}
catch(err){
    print(err.errInfo)
}

try {
// Value outside allowed range

db.landfill.insertOne({
    "location": ObjectId('64340a41b810aa7140dca5e4'),
    "capacity": 120,
    "operational": true,
    "collectionsPerfomed": [ObjectId('64340a9cb810aa7140dca5e8'),ObjectId('6437e000dae3143cfd6063d8')],
    "percentFilled": -2
})
}
catch(err){
    print(err.errInfo)
}



/*
============================
Correct vehicle object
============================

db.vehicle.insertOne({
    "licencePlate":"1H2 3456",
    "capacity": 2000,
    "homeLandfill": ObjectId('64340a9cb810aa7140dca5e8'),
    "model": "123GarbageTruck-XL",
    "make": "Scania"
})
*/

try {
// Missing requirements

db.vehicle.insertOne({
    "model": "123GarbageTruck-XL",
    "make": "Scania"
})
}
catch(err){
    print(err.errInfo)
}

try {
// Wrong types

db.vehicle.insertOne({
    "licencePlate":123,
    "capacity": "Some",
    "homeLandfill": 1,
    "model": true,
    "make": false
})
}
catch(err){
    print(err.errInfo)
}

try {
// Value outside allowed range

db.vehicle.insertOne({
    "licencePlate":"1H2 3456",
    "capacity": 100000000,
    "homeLandfill": ObjectId('64340a9cb810aa7140dca5e8'),
    "model": "123GarbageTruck-XL",
    "make": "Scania"
})
}
catch(err){
    print(err.errInfo)
}


/*
============================
Correct garbageCollection object
============================

db.garbageCollection.insertOne({
    "assignedVehicle": ObjectId('64340a41b810aa7140dca5e4'),
    "garbageCans": [ObjectId('64340a9cb810aa7140dca5e8'),ObjectId('6437e000dae3143cfd6063d8')],
    "dayOfCollection": "Monday",
    "dateEnd": new ISODate("2025-04-01T12:00:00Z"),
    "length": 10.2,
    "timeEstimate": 180
})

*/

try {
// Missing requirements

db.garbageCollection.insertOne({
    "garbageCans": [ObjectId('64340a9cb810aa7140dca5e8'),ObjectId('6437e000dae3143cfd6063d8')],
    "dateEnd": new ISODate("2025-04-01T12:00:00Z"),
    "length": 10.2,
    "timeEstimate": 180
})
}
catch(err){
    print(err.errInfo)
}

try {
// Wrong types

db.garbageCollection.insertOne({
    "assignedVehicle": "Car",
    "garbageCans": 10,
    "dayOfCollection": 2,
    "dateEnd": true,
    "length": "long",
    "timeEstimate": false
})
}
catch(err){
    print(err.errInfo)
}

try {
// Value outside allowed range

db.garbageCollection.insertOne({
    "assignedVehicle": ObjectId('64340a41b810aa7140dca5e4'),
    "garbageCans": [ObjectId('64340a9cb810aa7140dca5e8'),ObjectId('6437e000dae3143cfd6063d8')],
    "dayOfCollection": "Easter Monday",
    "dateEnd": new ISODate("2025-04-01T12:00:00Z"),
    "length": 10.2,
    "timeEstimate": 180
})
}
catch(err){
    print(err.errInfo)
}