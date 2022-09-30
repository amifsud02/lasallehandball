import { NextApiRequest, NextApiResponse } from "../../../node_modules/next/dist/shared/lib/utils";

import fixturesData from "./fixtures.json"

export default async(req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json(fixturesData)
}