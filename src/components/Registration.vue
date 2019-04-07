<template>
    <div id="container" class="md-layout md-alignment-top-center">
    <div class="md-layout-item md-size-50">
      <form class="login-form">
        <md-card>
          <md-card-header :data-background-color="dataBackgroundColor">
            <h3 class="title">Inscription</h3>
            <p class="category">Bénéficier des avantages des membres</p>
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
                <label>Adresse</label>
                <md-input v-model="adresse" type="text"></md-input>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100 md-size-100">
              <md-field>
                <label>Mot de passe</label>
                <md-input v-model="password" type="text"></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-100">
              <md-field>
                <label>Confirmer mot de passe</label>
                <md-input v-model="confpassword" type="text"></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-size-100 text-right">
              <md-button class="md-raised md-success">S'inscrire</md-button>
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
      adresse: null,
      password: null,
      confpassword:null
    };
  }
};
</script>
<style>
#container{
    margin-top: 8%;
}
</style>
