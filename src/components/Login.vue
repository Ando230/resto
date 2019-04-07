<template>
  <div id="container" class="md-layout md-alignment-top-center">
    <div class="md-layout-item md-size-50">
      <form class="login-form">
        <md-card>
          <md-card-header :data-background-color="dataBackgroundColor">
            <h3 class="title">S'identifier</h3>
            <p class="category">en tant que membre</p>
          </md-card-header>
          <md-card-content>
            <div class="md-layout-item md-small-size-100 md-size-100">
              <md-field>
                <label>Pseudo</label>
                <md-input v-model="username" type="text"></md-input>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100 md-size-100">
              <md-field>
                <label>Mot de passe</label>
                <md-input v-model="password" type="text"></md-input>
              </md-field>
            </div>

            <div class="md-layout-item md-size-100 text-left">
              <router-link :to="{ name: 'Registration' }" class="nav-link">S'inscrire ici</router-link>
            </div>
            <div class="md-layout-item md-size-100 text-right">
              <md-button class="md-raised md-success">Se connecter</md-button>
            </div>
          </md-card-content>
        </md-card>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "edit-profile-form",
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      username: null,
      password: null
    };
  }
};
</script>

<style>
#container{
    margin-top: 10%;
}
</style>
