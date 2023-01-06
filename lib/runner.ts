import clientPromise from "./mongodbClient";

import { Teams, Competitions, Matches } from "./interfaces";

export async function getAllTeams(): Promise<Teams[]> {
    const client = await clientPromise;

    const collection = client.db('lshc_backend').collection("teams")

    return await collection.aggregate([{
        $project: { _id: 0, teamName: 1 }
      }]).toArray();;
}

export async function getAllCompetitions(): Promise<Competitions[]> {
    const client = await clientPromise;

    const collection = client.db('lshc_backend').collection('competitions');

    return await collection.aggregate([
        {
            $lookup:  {
                from: "categories", 
                localField: "category", 
                foreignField: "_id",
                as: "category_info" 
            } 
        },
        {
            $unwind: "$category_info"
        },
        {
            $lookup:  {
                from: "competitionTypes", 
                localField: "competitionType", 
                foreignField: "_id",
                as: "competition_info" 
            } 
        },
        {
            $unwind: "$competition_info"
        },
        {
            $project: { 
                _id: 0, 
                category: "$category_info.categoryName",
                competitionType: "$competition_info.competitionName"
            }
        }
    ]).toArray()
}

export async function getLatestFixtures(): Promise<Matches[]> {
    const client = await clientPromise;

    const collection = client.db('lshc_backend').collection('fixtures');

    return await collection;
}
 

export async function getLatestResults(): Promise<Matches[]> {
    const client = await clientPromise;

    const collection = client.db('lshc_backend').collection('fixtures');

    return await collection.aggregate([
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
              competitionType: "$competition_type_name.competitionName"
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
            location: 1
          }
        }
      ]).toArray();
      
      
}
 