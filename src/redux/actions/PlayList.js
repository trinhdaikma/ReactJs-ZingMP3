import { SELECT_MUSIC } from "../constans/Actionstypes";

export const selectMusic = itemMusic => ({
  type: SELECT_MUSIC,
  payload: itemMusic
});
