import { User } from "./User";

export interface CoinFlipType{
    value: number;
    competitors:User[];
    creator:User;
    wapons:any[],
    completed:boolean;
    winner?:User;
    started?:boolean;
}