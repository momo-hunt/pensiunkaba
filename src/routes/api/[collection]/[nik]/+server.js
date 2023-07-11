import { json } from "@sveltejs/kit";

export const GET = async ({ locals, params }) => {
  const result = await locals.db
    .collection(params.collection)
    .read({ filter: { nik: params.nik } });
  return json(result);
};
