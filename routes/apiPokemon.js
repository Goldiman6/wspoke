import { Router } from "express";
import { ApiController } from "../controllers/apiController.js";


export const apiPokemon = Router();

// Ruta para obtener letras aleatorias para el juego
apiPokemon.get('/letters', ApiController.getRandomLetters);

// Ruta para verificar si una palabra es válida
apiPokemon.post('/validate', ApiController.validateWord);

// Ruta para mezclar las letras
apiPokemon.post('/shuffle', ApiController.shuffleWords);

// Ruta para reiniciar el juego
apiPokemon.post('/reset', ApiController.resetGame);