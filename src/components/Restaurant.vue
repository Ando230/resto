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
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          class="md-table-row"
                          v-for="(plat,index) in plats"
                          :key="index"
                          @click="addCommande(plat)"
                        >
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
    </div>
    <div class="container">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#">Previous</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">1</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">2</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">3</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">Next</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {};
</script>
