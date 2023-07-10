export const load = async ({ locals, params }) => {
  const getData = async () => {
    const { nik } = params;
    return await locals.db.collection("pensiun").read({ filter: { nik } });
  };

  return {
    pensiun: getData(),
    nik: params.nik,
  };
};
