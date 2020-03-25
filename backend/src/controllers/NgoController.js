const crypto = require("crypto");
const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const ngos = await connection("ngos").select("*");

    return response.json(ngos);
  },

  async create(request, response) {
    const { name, email, whatsapp, city, st } = request.body;

    const id = crypto.randomBytes(4).toString("HEX");

    await connection("ngos").insert({
      id,
      name,
      email,
      whatsapp,
      city,
      st
    });

    return response.json({ id });
  }
};
