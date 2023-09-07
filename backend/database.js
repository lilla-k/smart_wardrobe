import { MongoClient } from "mongodb";

const uri = "mongodb+srv://smartWardrobeBackend:pgEPSQ4hptl4uisE@cluster0.yjrzlwq.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

export async function getCloths(){
    await client.connect();
    const coll = client.db("cloths").collection("cloths");
    let cursor = coll.find();
    const cloths=[];
    await cursor.forEach(cloth=>cloths.push(cloth));
    await client.close();
    return cloths;
}

export async function addCloth(cloth){
    await client.connect();
    const coll = client.db("cloths").collection("cloths");
    const result = await coll.insertOne(cloth);
    await client.close();
    return result.acknowledged;
}
