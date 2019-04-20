<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link :to="{ name: 'Restaurant' }" class="nav-link">Restaurant</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Commander' }" class="nav-link">Commander</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Login' }" class="nav-link">Déjà membre</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Registration' }" class="nav-link">Devenir membre</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'InsertPlat' }" class="nav-link">Insert plat</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'InsertResto' }" class="nav-link">Insert resto</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'UploadPhoto' }" class="nav-link">Upload Photo</router-link>
          </li>
          <li class="nav-item">
            <a @click="deconnexion(event)" href="#" class="nav-link">Deconnexion</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          >
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <div class="gap">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="css">
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
</style>

<script>
export default {
  name: "app",

  methods: {
    deconnexion(event) {
      window.sessionStorage.clear();
      this.$router.push("/login");
      return;
    }
  }
};
</script>