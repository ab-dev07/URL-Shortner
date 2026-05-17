import { nanoid } from "nanoid";

export const generteNanoId = (size = 7) => {
  return nanoid(size);
};
