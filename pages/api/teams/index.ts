
import { supabase } from "../../../utils/supabaseClient";
import { NextApiRequest, NextApiResponse } from "../../../node_modules/next/dist/shared/lib/utils";

export default async(req: NextApiRequest, res: NextApiResponse) => {
    const allTeams = await supabase
        .from("teams")
        .select("teamName")

    res.status(202).json(allTeams);
}
