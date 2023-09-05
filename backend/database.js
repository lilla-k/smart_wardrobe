import { MongoClient } from "mongodb";

const uri = "mongodb+srv://smartWardrobeBackend:pgEPSQ4hptl4uisE@cluster0.yjrzlwq.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function getCloths(){
    await client.connect();
    const coll = client.db("cloths").collection("cloths");
    let cursor = coll.find();
    const cloths=[];
    await cursor.forEach(cloth=>cloths.push(cloth));
    return cloths;
}

export default getCloths;