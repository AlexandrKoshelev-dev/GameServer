import { Client } from "../entities/client";
import { Room } from "../entities/room";

export enum messageCase {
    clientsNames = "clientsNames",
    roomsNames = "roomsNames",
}

export interface IMessage {
    type: messageCase;
    data: any;
}

export interface IController {
    getAll(): Client[] | Room[];
    getOneById(): Client | Room;
}
