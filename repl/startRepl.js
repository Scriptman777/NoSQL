var config = {
    "_id": "GarbageReplSet",
    "version": 1,
    "members": [
        {
            "_id": 1,
            "host": "mongo-primary:27017",
            "priority": 4
        },
        {
            "_id": 2,
            "host": "mongo-secondary-a:27017",
            "priority": 3
        },
        {
            "_id": 3,
            "host": "mongo-secondary-b:27017",
            "priority": 2
        }
    ]
};

rs.initiate(config, { force: true });