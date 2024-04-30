import { pool } from "../database/db.js"

const findAll = async () => {
  const { rows } = await pool.query("SELECT * FROM posts");
  return rows;
};

const findById = async (id) => {
  const query = "SELECT * FROM posts WHERE id = $1";
  const { rows } = await pool.query(query, [id]);
  return rows[0];
};

const create = async (post) => {
  const query = "INSERT INTO posts (titulo, img, descripcion) VALUES ($1, $2, $3) RETURNING *";
const { rows } = await pool.query(query, [post.titulo, post.img, post.descripcion]);
return rows[0];
};

const remove = async (id) => {
  const query = "DELETE FROM posts WHERE id = $1 RETURNING *";
  const { rows } = await pool.query(query, [id]);
  return rows[0];
};

// const update = async (id) => {
//   const query = "UPDATE posts SET done = NOT done WHERE id = $1 RETURNING*";
//   const { rows } = await pool.query(query, [id]);
//   return rows[0];
// };

export const postModel = {
  findAll,
  findById,
  create,
  remove,
  //update,
};


