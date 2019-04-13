<template>
  <div id="app">
    <!-- <nav class="navbar navbar-expand-sm bg-light">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link :to="{ name: 'Home' }" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Add' }" class="nav-link">Add Item</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'List' }" class="nav-link">All Item</router-link>
        </li>
      </ul>
    </nav>-->
    <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link :to="{ name: 'Home' }" class="nav-link">Home</router-link>
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

<style>
.gap {
  margin-top: 50px;
}
</style>

<script>
export default {
  name: "app"
};
</script>