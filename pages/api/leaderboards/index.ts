
import { supabase } from "../../../utils/supabaseClient";
import { NextApiRequest, NextApiResponse } from "../../../node_modules/next/dist/shared/lib/utils";

export default async(req: NextApiRequest, res: NextApiResponse) => {

    const id = req.query.id;

    const allTeams = await supabase
        .from("leaderboards")
        .select("*, teams!inner(teamName), competitions!inner(competitionTypes!inner(competitionName), category!inner(categoryName))")

    res.status(202).json(allTeams);
}
