<template>
  <div class="md-container">
    <p class="restoname">Restaurant :</p>
    <div class="md-layout md-gutter">
      <div class="md-layout-item md-layout md-gutter">
        <div class="md-layout-item">
          <div class="cloche">
            <a href="#">
              <span>
                <!-- <img src="../assets/img/hd.png" class="animated bounce infinite" id="animated-img1" alt="hors d'oeuvre"> -->
                <h4>Hors d'oeuvre</h4>
              </span>
            </a>
          </div>
        </div>
        <div class="md-layout-item">
          <div class="cloche-icon">
            <a href="#">
              <span>
                <!-- <img src="../assets/img/plats.png" alt="plats"> -->
                <h4>Plats</h4>
              </span>
            </a>
          </div>
        </div>
        <div class="md-layout-item">
          <div class="cloche-icon">
            <a href="#">
              <span>
                <!-- <img src="../assets/img/dessert.png" alt="dessert"> -->
                <h4>Desserts</h4>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div class="md-layout-item md-size-40"></div>
    </div>
    <div class="md-layout md-gutter command-list">
      <div class="md-layout-item md-layout md-gutter">
        <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
          <div class="md-card md-theme-default">
            <div class="md-card-header" data-background-color="grey">
              <h4 class="title">Liste des HORS D'OEUVRE</h4>
              <p class="category">Cliquer pour passer commande</p>
            </div>
            <div class="md-card-content">
              <div>
                <div
                  class="md-content md-table md-theme-default"
                  table-header-color="grey"
                  value="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
                >
                  <!---->
                  <!---->
                  <div class="md-content md-table-content md-scrollbar md-theme-default">
                    <table>
                      <thead>
                        <tr>
                          <!---->
                          <th class="md-table-head">
                            <div class="md-table-head-container md-ripple md-disabled">
                              <div class="md-table-head-label">Photo</div>
                            </div>
                          </th>
                          <th class="md-table-head">
                            <div class="md-table-head-container md-ripple md-disabled">
                              <div class="md-table-head-label">Designation</div>
                            </div>
                          </th>
                          <th class="md-table-head">
                            <div class="md-table-head-container md-ripple md-disabled">
                              <div class="md-table-head-label">Prix</div>
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr  class="md-table-row" v-for="(plat,index) in plats" :key="index" @click="addCommande(plat)">
                          <!---->
                          <td class="md-table-cell">
                            <div class="md-table-cell-container">
                              <img :src="`${plat.image}`">
                            </div>
                          </td>
                          <td class="md-table-cell">
                            <div class="md-table-cell-container">{{plat.designation}}</div>
                          </td>
                          <td class="md-table-cell">
                            <div class="md-table-cell-container">{{plat.prix}}</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="md-layout-item md-size-40">
        <div class="commande">
          <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100 sticky-top">
            <div class="md-card md-theme-default">
              <div class="md-card-header" data-background-color="grey">
                <h4 class="title">Liste des commandes</h4>
                <p class="category">Cliquer le nombre pour modifier</p>
              </div>
              <div class="md-card-content">
                <div class="sticky">
                  <div
                    class="md-content md-table md-theme-default"
                    table-header-color="grey"
                    value="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
                  >
                    <div class="md-content md-table-content md-scrollbar md-theme-default">
                      <table>
                        <thead>
                          <tr>
                            <th class="md-table-head">
                              <div class="md-table-head-container md-ripple md-disabled">
                                <div class="md-table-head-label">Quantité</div>
                              </div>
                            </th>
                            <th class="md-table-head">
                              <div class="md-table-head-container md-ripple md-disabled">
                                <div class="md-table-head-label">Designation</div>
                              </div>
                            </th>
                            <th class="md-table-head">
                              <div class="md-table-head-container md-ripple md-disabled">
                                <div class="md-table-head-label">Prix</div>
                              </div>
                            </th>
                            <th class="md-table-head">
                              <div class="md-table-head-container md-ripple md-disabled">
                                <div class="md-table-head-label">Annuler</div>
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="md-table-row" v-for="(commande,index) in commandes " :key="index">
                            <td class="md-table-cell" contenteditable="true">
                              <div class="md-table-cell-container">{{commande.quantite}}</div>
                            </td>
                            <td class="md-table-cell">
                              <div class="md-table-cell-container">{{commande.designation}}</div>
                            </td>
                            <td class="md-table-cell">
                              <div class="md-table-cell-container">{{commande.prix}}</div>
                            </td>
                            <td class="md-table-cell">
                              <md-icon>
                                <a href="#" @click="removeCommande(commande)">
                                  <img src="../assets/img/close-circle.png">
                                </a>
                              </md-icon>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //   name: "LayoutHorizontalGutter"
  name: "nav-tabs-table",
  data() {
    return {
      plats: [
        {
          id: "1",
          nombre: "2",
          designation: "Henakisoa sy ravitoto",
          prix: "2000",
          image: "../assets/img/default-food.jpg"
        },
        {
          id: "2",
          nombre: "1",
          designation: "Trondro saosy",
          prix: "3000",
          image: "../assets/img/default-food-1.jpeg"
        },
        {
          id: "3",
          nombre: "1",
          designation: "Akoho rony",
          prix: "2000",
          image: "../assets/img/default-food.jpg"
        }
      ],
      commandes: []
    };
  },
  methods: {
    onSelect: function(items) {
      this.selected = items;
    },

    addCommande: function(item) {
      var existingID = this.commandes.find(el => (el.id == item.id));
      if (existingID) {
        existingID.quantite = Number(existingID.quantite) + 1;
      } else {
        this.commandes.push({
          id: item.id,
          quantite: 1,
          designation: item.designation,
          prix: item.prix
        });
      }
    },

    removeCommande: function(item){
      if(this.commandes && this.commandes.length > 0){
        var index = this.commandes.findIndex(el => (el.id == item.id));
        if (index >= 0) {
          this.commandes.splice(index, 1);
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
//@import "~vue-material/theme/engine";
.md-table-cell-container img {
  max-width: 400px !important;
}
.md-layout-item {
  height: 40px;
  padding-right: 10px !important;
  padding-left: 10px !important;
  //   padding-top: 10px !important;
  margin-left: 10px !important;
  margin-right: 10px !important;

  text-align: center !important;
}

.md-layout-item img {
  height: 45 !important;
  widows: auto !important;
}

.commande {
  margin-right: 10px;
}

.restoname {
  margin-left: 25px !important;
  margin-top: 10px !important;
}

.titre {
  text-align: center !important;
}

.command-list {
  margin-top: 10px;
  //background-color: green !important;
}

.close-img {
  width: 40px !important;
  height: 40px !important;
  align-content: center !important;
}

.cloche-icon {
  // max-width: 40px !important;
}
</style>

             
            //  <md-table-cell md-label="supprimer">
            //     <md-button class="md-just-icon md-simple md-danger">
            //       <md-icon>
            //         <img src="../assets/img/close-circle.png">
            //       </md-icon>
            //       <md-tooltip md-direction="top">Supprimer</md-tooltip>
            //     </md-button>
            //   </md-table-cell>