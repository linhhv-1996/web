import { NextApiRequest } from "next";
import { defaultConfig } from "../../../hooks/useConfig";
import { getLayoutConfigFromQuery } from "../../../layoutsold";
import { IConfig, ILayoutConfig, FileType } from "../../../types.old";

export const parseRequest = (req: NextApiRequest): IConfig & ILayoutConfig => {
  const config: IConfig = {
    ...defaultConfig,
    ...req.query,
  };

  const layoutConfig = getLayoutConfigFromQuery(config.layoutName, req.query);

  return {
    ...config,
    ...layoutConfig,
  };
};
