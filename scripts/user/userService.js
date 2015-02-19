/**
 * Created by Gabo on 2/16/2015.
 */
app.service('userServices', []).factory('User', function($resource) {
  return $resource('http://homologacao.aloingressos.com.br:8081/putz-rest/userController/login',user, {
    update: {
      method: 'PUT'
    }
  });
});
