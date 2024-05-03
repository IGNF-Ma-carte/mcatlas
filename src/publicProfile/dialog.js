import dialog from 'mcutils/dialog/dialog';
import api from 'mcutils/api/api'

import publicProfile from './publicProfile';
import dialogProfile from './publicProfile-dialog.html'

function userDialog (user) {
  dialog.showWait('Recherche de l\'utilisateur...');
  // Get user
  api.getUser(user.user_id, user => {
    // Show user dialog
    if (user.error) {
      dialog.showAlert('Impossible d\'accéder à l\'utilisateur...')
    } else {
      dialog.show({ 
        className: 'profile-dialog user-dialog',
        content: dialogProfile, 
        buttons: { ok: 'ok' } 
      });
      publicProfile(user, dialog.getContentElement());
    }
  })
}

function teamDialog(team) {
  dialog.showWait('Recherche de l\'équipe...');
  // Get user
  api.getTeam(team.id, t => {
    // Show user dialog
    if (t.error) {
      dialog.showAlert('Impossible d\'accéder à l\'équipe...')
    } else {
      dialog.show({ 
        className: 'profile-dialog team-dialog',
        content: dialogProfile, 
        buttons: { ok: 'ok' } 
      });
      publicProfile(t, dialog.getContentElement(), true);
    }
  }, true)
}

export { userDialog, teamDialog }