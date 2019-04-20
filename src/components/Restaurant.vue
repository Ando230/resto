<template>
  <div class="content">
    <div class="recherche"></div>
    <div class="listrestaurant">
      <div class="md-layout-item md-layout md-gutter">
        <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
          <div class="md-card md-theme-default">
            <div class="md-card-header" data-background-color="grey">
              <h4 class="title">Liste des Restaurants</h4>
              <!-- <p class="category">Cliquer pour passer commande</p> -->
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
                              <div class="md-table-head-label">Nom restaurant</div>
                            </div>
                          </th>
                          <th class="md-table-head">
                            <div class="md-table-head-container md-ripple md-disabled">
                              <div class="md-table-head-label">Spécialité</div>
                            </div>
                          </th>
                          <th class="md-table-head">
                            <div class="md-table-head-container md-ripple md-disabled">
                              <div class="md-table-head-label">Adresse</div>
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          class="md-table-row"
                          v-for="restaurant of listRestaurants" :key="restaurant['.key']"
                        >
                          <!---->
                          <td class="md-table-cell">
                            <div class="md-table-cell-container" >
                              <img v-bind:src="restaurant.image">
                            </div>
                          </td>
                          <td class="md-table-cell">
                            <div class="md-table-cell-container">{{restaurant.nom}}</div>
                          </td>
                          <td class="md-table-cell">
                            <div class="md-table-cell-container">{{restaurant.specialite}}</div>
                          </td>
                          <td class="md-table-cell">
                            <div class="md-table-cell-container">{{restaurant.adresse}}</div>
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
    <div class="container">
      <ul class="pagination">
        <li class="page-item"  v-for="pagination of listPaginations" :key="pagination['.key']">
          <a class="page-link" @click="navigateIndex(pagination.value)" href="#">{{pagination.value}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>


import { db } from '../config/db';

export default {
    data() {
      return {
        _resto:[],
        restaurants:[],
        paginations:[],
        paginationIndex: 0
      };
    },
    firebase: {
      restaurants : db.ref('restaurant')
    },
    computed: {
      listRestaurants: {
        get: function() {
          var resto =  this.restaurants;
          var index0 = this.paginationIndex * 5;
          var index1 = index0 + 5;
          return resto.slice(index0, index1);
        },
        set: function(newValue) {
          var resto =  this.restaurants;
          var index0 = this.paginationIndex * 5;
          var index1 = index0 + 5;
          return resto.slice(index0, index1);
        }
    },
      listPaginations: {
        get: function() {
          var resto =  this.restaurants;
          var nbrResto = Math.trunc((resto.length / 5));
          var modulo = resto.length % 5;
          if(modulo != 0) nbrResto++;
          this.paginations = [];
          for(var i = 1; i <= nbrResto; i++)
          {
              this.paginations.push({value: i});
          }
          return this.paginations;
        },
        set: function() {
          var resto =  this.restaurants;
          var nbrResto = Math.trunc((resto.length / 5));
          var modulo = resto.length % 5;
          if(modulo != 0) nbrResto++;
          this.paginations = [];
          for(var i = 1; i <= nbrResto; i++)
          {
              this.paginations.push({value: i});
          }
          return this.paginations;
        }
      },
  },
  methods : {
     navigateIndex: function(value) {
       this.paginationIndex = (value - 1);
       var page = this.paginationIndex;
       var index0 = this.paginationIndex * 5;
       var index1 = index0 + 5;
       var restoSlice = this.restaurants.slice(index0, index1); 
       this.listRestaurants = restoSlice;
     }
  }

};
</script>

<style lang="scss" scoped>
.md-table-cell-container img {
  max-width: 400px !important;
  max-height: 150px !important;
}
</style>
