<template>
    <div id="container">
      <form class="login-form" v-on:submit.prevent="addItem">
            <div class="form-group">
                <label>nom</label>
                <input type="text" v-model="plat.nom" />
            </div>
            <div class="form-group">
                <label>designation</label>
                <input v-model="plat.designation" type="text">
            </div>
            <div class="form-group">
                <label>prix</label>
                <input v-model="plat.prix" type="text">
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
      plat: {
        nom: "",
        designation: "",
        prix: "",
        image:""
      }
    };
  },
  firebase: {
    items: db.ref("plat")
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
                if(this_s != null && this_s.$firebaseRefs != null && this_s.$firebaseRefs.items != null)
                {
                  this_s.$firebaseRefs.items.push({
                      nom: this_s.plat.nom,
                      designation: this_s.plat.designation,
                      prix: this_s.plat.prix,
                      image: url,
                  })
                  this_s.plat.nom = '';
                  this_s.plat.designation = '';
                  this_s.plat.prix = '';
                  this_s.plat.image = '';
                  this_s.$router.push("/Commander");
                }
                  
              });
          });
      }
      else
      {
          alert("Vous devez choisir un photo pour votre profil!");
      }
    }
  }
};

</script>

<style>
#container{
    margin-top: 8%;
}
</style>
