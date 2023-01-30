import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodbClient";

const fixtures = async(req: NextApiRequest, res: NextApiResponse) => {

    const client = await clientPromise;
    const collection = client.db('lshc_backend').collection('fixtures')

    res.status(200).json(await collection.aggregate([ 
        {
          $lookup: {
            from: "teams",
            localField: "homeTeam",
            foreignField: "_id",
            as: "home_name"
          }
        },
        {
          $lookup: {
            from: "teams",
            localField: "awayTeam",
            foreignField: "_id",
            as: "away_name"
          }
        },
        {
          $lookup: {
            from: "competitions",
            localField: "competition",
            foreignField: "_id",
            as: "competition_info"
          }
        },
        {
          $unwind: "$competition_info"
        },
        {
          $lookup: {
            from: "categories",
            localField: "competition_info.category",
            foreignField: "_id",
            as: "category_name"
          }
        },
        {
          $unwind: "$category_name"
        },
        {
          $lookup: {
            from: "competitionTypes",
            localField: "competition_info.competitionType",
            foreignField: "_id",
            as: "competition_type_name"
          }
        },
        {
          $unwind: "$competition_type_name"
        },
        {
          $project: {
            _id: 0  ,
            competition: {
              season: "$competition_info.season",
              category: "$category_name.categoryName",
              competitionTypes: "$competition_type_name.competitionName"
            },
            homeTeam: {
                teamName: "$home_name.teamName",
                teamLogo: "$home_name.teamLogo"
            },
            awayTeam: { 
                teamName: "$away_name.teamName",
                teamLogo: "$away_name.teamLogo"
            },
            homeScore: 1,
            awayScore: 1,
            status: 1,
            location: 1,
            startDate: 1,
            endDate: 1
          }
        },
        {
          $sort: { startDate: 1 }
        }
      ]).toArray()
    )
}

export default fixtures;