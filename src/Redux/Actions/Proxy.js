import TYPE from "./../Types/Proxy";
import { makeSyncAction } from "./Utils";

import { packets } from "./../../__Mocks__/Data/Packets";
import { connections } from "./../../__Mocks__/Data/Connection";

export const getPackets = () => makeSyncAction(TYPE.GET_PACKETS)(packets());

export const resetPackets = () => makeSyncAction(TYPE.RESET_PACKETS)([]);

export const setPackets = makeSyncAction(TYPE.SET_PACKETS);

export const getConnections = () => makeSyncAction(TYPE.GET_CONNECTIONS)(connections);

export const setConnections = makeSyncAction(TYPE.SET_CONNECTIONS);