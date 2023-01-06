const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://<username>:<password>@cluster0.xzlir.mongodb.net/?retryWrites=true&w=majority";

export const mongodb_client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

