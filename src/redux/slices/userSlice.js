import {createSlice} from '@reduxjs/toolkit';
import {fetchProfil, loadTokenAndFetchProfil, login, updateUserProfile} from "../actions/userActions";

// Création du slice pour la gestion de l'état utilisateur
const userSlice = createSlice({
  name: 'user',       // Nom du slice
  initialState: {
    profil: {},       // Profil de l'utilisateur (initialement vide)
    token: null,      // Jeton d'authentification (initialement nul)
    status: 'idle',   // Statut de la requête (initialement inactif)
    error: null,      // Erreur (initialement nulle)
  },
  reducers: {
    // Action pour définir le jeton d'authentification
    setToken: (state, action) => {
      state.token = action.payload;
    },
    // Action pour déconnecter l'utilisateur
    logout: (state) => {
      state.token = null;
      state.profil = null;
      state.loading = false;
      state.error = null;
      sessionStorage.removeItem('token'); // Suppression du jeton du stockage de session
    }
  },
  extraReducers: (builder) => {
    builder
      // Gestion des états pour la requête de connexion
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Gestion des états pour la récupération du profil
      .addCase(fetchProfil.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProfil.fulfilled, (state, action) => {
        state.loading = false;
        state.profil = action.payload;
      })
      .addCase(fetchProfil.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Gestion des états pour le chargement du jeton et la récupération du profil
      .addCase(loadTokenAndFetchProfil.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadTokenAndFetchProfil.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(loadTokenAndFetchProfil.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Gestion des états pour la mise à jour du profil utilisateur
      .addCase(updateUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profil = action.payload;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Export des actions et des sélecteurs
export const { logout, setToken } = userSlice.actions;
export const selectUserProfil = (state) => state.user.profil;
export const selectUserStatus = (state) => state.user.status;
export const selectUserLoading = (state) => state.user.loading;
export const selectUserError = (state) => state.user.error;
export const selectUserToken = (state) => state.user.token;
export default userSlice.reducer;
