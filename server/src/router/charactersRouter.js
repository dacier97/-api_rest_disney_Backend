const router = require("express").Router();

const Characters = require("../model/character");

router.get("/products", async (req, res) => {
  const getCharacter = await Characters.findAll();
  res.status(200).json({ ok: true, status: 200, body: getCharacter });
});

router.get("/products/:id", async (req, res) => {
  const id = req.params.id;
  const getCharacterOne = await Characters.findOne({
    where: { id: id },
  });
  res.status(200).json({ ok: true, status: 200, body: getCharacterOne });
});

router.post("/products", async (req, res) => {
  const dataCharacters = req.body;
  await Characters.sync();
  const createCharacter = await Characters.create({
    name: dataCharacters.name,
    age: dataCharacters.age,
    weight: dataCharacters.weight,
    history: dataCharacters.history,
  });
  res.json(createCharacter);
});

router.put("/products/:id", async (req, res) => {
  const dataCharacters = req.body;
  const id = req.params.id;
  const updateCharacter = await Characters.update(
    {
      name: dataCharacters.name,
      age: dataCharacters.age,
      weight: dataCharacters.weight,
      history: dataCharacters.history,
    },
    {
      where: {
        id: id,
      },
    }
  );
});

router.delete("/products/:id", async (req, res) => {
  const id = req.params.id;
  const deleteCharacters = await Characters.destroy({
    where: {
      id: id,
    },
  });
  res.status(204).json({
    ok: true,
    status: 204,
    body: deleteCharacters,
  });
});

module.exports = router;
