<template>
    <div id="container">
      <form class="login-form" v-on:submit.prevent="addItem">
            <div class="form-group">
                <label>nom</label>
                <input type="text" v-model="restaurant.nom" />
            </div>
            <div class="form-group">
                <label>description</label>
                <input v-model="restaurant.description" type="text">
            </div>
            <div class="form-group">
                <label>typecuisine</label>
                <input v-model="restaurant.typecuisine" type="text">
            </div>
            <div class="form-group">
                <label>adresse</label>
                <input v-model="restaurant.adresse" type="text">
            </div>
            <div class="form-group">
                <label>telephone</label>
                <input v-model="restaurant.telephone" type="text">
            </div>
            <div class="form-group">
                <label>longitude</label>
                <input v-model="restaurant.longitude" type="text">
            </div>
            <div class="form-group">
                <label>latitude</label>
                <input v-model="restaurant.latitude" type="text">
            </div>
            <div class="form-group">
              <label>Upload Photo:</label>
              <input type="file" id="fileUpload" multiple accept="image/*">
            </div>
            <div>
              <input type="submit" class="md-raised md-success" value="Inserer">
            </div>
        </form>
  </div>
</template>
<script>

import { db } from "../config/db";
import { storage } from "../config/db";

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
      restaurant: {
        nom: "",
        description: "",
        typecuisine: "",
        adresse:"",
        telephone: "",
        longitude: "",
        latitude: "",
      }
    };
  },
  firebase: {
    items: db.ref("restaurant")
  },
  methods: {
    addItem(event) 
    {
      var fileUpload = document.getElementById("fileUpload");
      if(fileUpload !== null && fileUpload.files != null && fileUpload.files.length != 0){
          var path = "imagenes/" + fileUpload.files[0].name;
          var storageRef = storage.ref(path);
          var firstFile = fileUpload.files[0]; // get the first file uploaded
          var uploadTask = storageRef.put(firstFile);
          var this_s = this;
          uploadTask.on("state_changed", function progress(snapshot) {
              storageRef.getDownloadURL().then(function(url) {
                  this_s.$firebaseRefs.items.push({
                      nom: this_s.restaurant.nom,
                      description: this_s.restaurant.description,
                      typecuisine: this_s.restaurant.typecuisine,
                      adresse: this_s.restaurant.adresse,
                      telephone: this_s.restaurant.telephone,
                      longitude: this_s.restaurant.longitude,
                      latitude: this_s.restaurant.latitude,
                      photo: url,
                  })
                  this_s.restaurant.nom = '';
                  this_s.restaurant.description = '';
                  this_s.restaurant.typecuisine = '';
                  this_s.restaurant.adresse = '';
                  this_s.restaurant.telephone = '';
                  this_s.restaurant.longitude = '';
                  this_s.restaurant.latitude = '';
                  this_s.$router.push("/Restaurant");
              });
          });
      }
      else
      {
          alert("Vous devez choisir un photo pour votre profil!");
      }
      this.$router.push("/InsertResto");
    }
  }
};

</script>

<style>
#container{
    margin-top: 8%;
}
</style>
