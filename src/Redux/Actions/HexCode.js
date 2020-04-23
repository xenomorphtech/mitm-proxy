import TYPE from "./../Types/HexCode";
import { makeSyncAction } from "./Utils";

export const setHexCode = makeSyncAction(TYPE.SET_HEX_CODE);