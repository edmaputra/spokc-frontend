import { AtmTransaction } from "./atm-transaction";

export class AtmDetail {
  atmGls: AtmTransaction[];
  atmEjs: AtmTransaction[];
  ejDifferences: AtmTransaction[];
  glDifferences: AtmTransaction[];
}
