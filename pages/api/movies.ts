import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "lib/mongodb";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
)
{
    let { db } = await connectToDatabase();

    const movies = await db.collection("movies").find().toArray();

    res.status(200).json({movies});
}