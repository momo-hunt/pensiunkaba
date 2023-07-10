import { db } from "$lib/server";

export const handle = async ({ event, resolve }) => {
  event.locals.db = db;

  const response = await resolve(event);
  return response;
};
