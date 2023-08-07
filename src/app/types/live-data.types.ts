import { Payload } from "./payload.types";

export interface LiveData {
    _id?: string;
    inserted_at: Date;
    payloadDecoded: Payload;
}