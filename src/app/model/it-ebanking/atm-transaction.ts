import { Atm } from "./atm";

export class AtmTransaction {
  id: number;
  atm: Atm;
  date: string;
  reference: string;
  amount: string;
}
