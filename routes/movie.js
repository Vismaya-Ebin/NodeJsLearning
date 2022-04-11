//movie related api details

import { updateMovieDetails, getAllMovies, getMovieByID, deleteByID, addMovie} from "../helper.js";

import express from "express";

//import { auth } from "../middleware/auth.js";

const router = express.Router();

router.get("/", async function (req, res, next) {
  const movied = await getAllMovies();
  res.send(movied);
});

router.get("/:id", async function (req, res) {
  const { id } = req.params;
  //const id = req.params.id; // do destructure as it is a object
  //db.movies.findOne({id:"102"})
  const movied = await getMovieByID(id);
  // const movie = movieData.find((movie) => movie.id === id);
  // console.log(movied);
  movied
    ? res.send(movied)
    : res.status(400).send({ error: "Movie not found" });
});

//DELETE
router.delete("/:id", async function (req, res, next) {
  // res.header(
  //   "Access-Control-Allow-Headers",
  //   "x-access-token, Origin, Content-Type, Accept"
  // );
  // next();
  const { id } = req.params;
  console.log(`DELETE ID: ${id}`);
  
  const movied = await deleteByID(id);
  res.send(movied);
});
//POST DATA TO DB
router.post("/", async function (req, res) {
  const newMovies = req.body;
  const movie = await addMovie(newMovies);
  //very important
  res.send(movie);
});
//PUT DATA TO DB
router.put("/:id", async function (req, res) {
  const updateMovie = req.body;
  const { id } = req.params;
  const movie = await updateMovieDetails(id, updateMovie);
  //very important
  res.send(movie);
});

export const movieRouter = router;
