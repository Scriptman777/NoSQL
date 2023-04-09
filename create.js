

use('GarbageCollectors');


db.createCollection("garbageCans", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         title: "GarbageCan Object Validation",
         required: [ "garbageType", "volume"],
         properties: {
            garbageType: {
               bsonType: "string",
               description: "'garbageType' must be a string and is required"
            },
            volume: {
               bsonType: "int",
               minimum: 10,
               maximum: 1000,
               description: "'volume' must be an integer in [ 10, 1000 ] and is required"
            },
            location: {
               bsonType: "objectId",
               description: "GarbageCan must have a location"
            }
         }
      }
   }
} )

db.createCollection("garbageCollection", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         title: "GarbageCollection Object Validation",
         required: [ "assignedVehicle", "dayOfCollection"],
         properties: {
            assignedVehicle: {
               bsonType: "objectId",
               description: "Vehicle must be assigned"
            },
            dayOfCollection: {
               enum: [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            }
         }
      }
   }
} )

db.createCollection("vehicle", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         title: "Vehicle Object Validation",
         required: [ "licence", "capacity", "homeLandfill"],
         properties: {
            licence: {
               bsonType: "string",
               description: "'licence' must be a string and is required"
            },
            capacity: {
               bsonType: "int",
               minimum: 1000,
               maximum: 100000,
               description: "'capacity' must be an integer in [ 1000, 100000 ] and is required"
            },
            homeLandfill: {
               bsonType: "objectId",
               description: "Vehicle must have a home landfill"
            }
         }
      }
   }
} )

db.createCollection("landfill", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         title: "Landfill Object Validation",
         required: [ "capacity", "location", "state"],
         properties: {
            location: {
               bsonType: "objectId",
               description: "Landfill must have a location"
            },
            capacity: {
               bsonType: "int",
               minimum: 10000,
               description: "'capacity' must be an larger than 10000l and is required"
            },
            state: {
               enum: [ "Operational", "Not Operational"],
            }
         }
      }
   }
} )

db.createCollection("location", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         title: "Location Object Validation",
         required: [ "gpsLat", "gpsLon"],
         properties: {
            gpsLat: {
               bsonType: "double",
               description: "'gpsLat' must be a double and is required"
            },
            gpsLon: {
               bsonType: "double",
               description: "'gpsLon' must be a double and is required"
            }
         }
      }
   }
} )