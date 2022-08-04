
import { supabase } from "../../../utils/supabaseClient";
import { NextApiRequest, NextApiResponse } from "../../../node_modules/next/dist/shared/lib/utils";

export default async(req: NextApiRequest, res: NextApiResponse) => {

    const id = req.query.id;

    const allTeams = await supabase
        .from("teams")
        .select("*")
        .eq("id", id)

    res.status(202).json(allTeams);
}
