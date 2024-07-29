import {createAsyncThunk} from "@reduxjs/toolkit";
import {selectUserToken} from "../slices/userSlice";

// Action asynchrone pour la connexion de l'utilisateur
export const login = createAsyncThunk(
  'user/login',
  async ({ email, password }, thunkAPI) => {
    // Envoi de la requête de connexion
    const response = await fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    // Vérification de la réponse
    if (!response.ok) {
      const error = await response.json();
      return thunkAPI.rejectWithValue(error);
    }

    // Retourne le jeton d'authentification en cas de succès
    const data = await response.json();
    return data.body.token;
  }
);

// Action asynchrone pour récupérer le profil de l'utilisateur
export const fetchProfil = createAsyncThunk(
  'user/profil',
  async (_, thunkAPI) => {
    try {
      // Obtention du jeton d'authentification depuis l'état
      const state = thunkAPI.getState();
      const token = state.user.token;

      // Retourne null si aucun jeton n'est présent
      if (!token) return null;

      // Envoi de la requête pour obtenir le profil utilisateur
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      // Vérification de la réponse
      if (!response.ok) {
        const error = await response.json();
        return thunkAPI.rejectWithValue(error.message);
      }

      // Retourne les données du profil en cas de succès
      const data = await response.json();
      return data.body;
    } catch (error) {
      // Gestion des erreurs inattendues
      return thunkAPI.rejectWithValue('Une erreur inattendue est apparue');
    }
  }
);

// Action asynchrone pour mettre à jour le profil de l'utilisateur
export const updateUserProfile = createAsyncThunk(
  'user/updateUserProfile',
  async (userProfile, { getState }) => {
    // Obtention du jeton d'authentification depuis l'état
    const token = selectUserToken(getState());

    // Envoi de la requête pour mettre à jour le profil utilisateur
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(userProfile),
    });

    // Vérification de la réponse
    if (!response.ok) {
      throw new Error('Failed to update profile');
    }

    // Retourne les données mises à jour du profil en cas de succès
    return await response.json();
  }
);

// Action asynchrone pour charger le jeton depuis le stockage de session et récupérer le profil
export const loadTokenAndFetchProfil = createAsyncThunk(
  'user/loadTokenAndFetchProfil',
  async (_, thunkAPI) => {
    // Obtention du jeton depuis le stockage de session
    const token = sessionStorage.getItem('token');

    if (token) {
      // Définition du jeton dans l'état
      thunkAPI.dispatch({
        type: 'user/setToken',
        payload: token,
      });

      // Récupération du profil utilisateur
      return thunkAPI.dispatch(fetchProfil());
    } else {
      // Gestion du cas où aucun jeton n'est trouvé
      return thunkAPI.rejectWithValue('No token found in session storage');
    }
  }
);
