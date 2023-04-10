

use('GarbageCollectors');


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
            },
            city: {
               bsonType: "string",
               description: "Name of the city must be a string"
            },
            street: {
               bsonType: "string",
               description: "Street must be a string"
            },
            streetNumber : {
               bsonType: "string",
               description: "StreetNumber must be a string"
            }
         }
      }
   }
} )


db.createCollection("garbageCans", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         title: "GarbageCan Object Validation",
         required: [ "garbageType", "volume", "location"],
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

db.createCollection("landfill", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         title: "Landfill Object Validation",
         required: [ "capacity", "location", "operational"],
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
            operational: {
               bsonType: "bool",
               description: "'operational' must be an a boolean and is required"
            },
            collectionsPerfomed : {
               bsonType: [ "array" ],
                items: {
                    bsonType: "objectId"
                },
                description: "'collectionsPerfomed' must be an array od garbageCollections"
            },
            percentFilled : {
               bsonType: "int",
               minimum: 0,
               description: "'percentFilled' cannot be lower than 0"
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
         required: [ "licencePlate", "capacity", "homeLandfill"],
         properties: {
            licencePlate: {
               bsonType: "string",
               description: "'licencePlate' must be a string and is required"
            },
            capacity: {
               bsonType: "int",
               minimum: 1000,
               maximum: 10000,
               description: "'capacity' must be an integer in [ 1000, 100000 ] and is required"
            },
            homeLandfill: {
               bsonType: "objectId",
               description: "Vehicle must have a home landfill"
            },
            model: {
               bsonType: "string",
               description: "model must be a string"
            },
            make: {
               bsonType: "string",
               description: "make must be a string"
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
            garbageCans : {
               bsonType: [ "array" ],
                items: {
                    bsonType: "objectId"
                },
                description: "'garbageCans' must be an array of garbageCans"
            },
            dayOfCollection: {
               enum: [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
               description: "'dayOfCollection' must be a string from Monday, Tuesday, Wednesday, Thursday or Friday and is required"
            },
            dateEnd: {
               bsonType: "date",
               description: "'dateEnd' must be a Date"
            },
            length : {
               bsonType: "double",
               description: "'length' must be a Double"
            },
            timeEstimate : {
               bsonType: "int",
               description: "'timeEstimate' must be an Int (in minutes)"
            },

         }
      }
   }
} )
