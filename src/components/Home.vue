<template>
  <div class="container md-layout md-alignment-top-center md-expand-lg">
    <div class="content md">
    <mdb-carousel :interval="8000" showControls showIndicators>
      <mdb-carousel-item
        img
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
        mask="black-light"
        alt="First slide"
      >
        <mdb-carousel-caption title="Light mask" text="First text"></mdb-carousel-caption>
      </mdb-carousel-item>
      <mdb-carousel-item
        img
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
        mask="black-strong"
        alt="Second slide"
      >
        <mdb-carousel-caption title="Strong mask" text="Second text"></mdb-carousel-caption>
      </mdb-carousel-item>
      <mdb-carousel-item
        img
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
        mask="black-slight"
        alt="Third slide"
      >
        <mdb-carousel-caption title="Super light mask" text="Third text"></mdb-carousel-caption>
      </mdb-carousel-item>
    </mdb-carousel>
    </div>
    <div class="car">
<mdb-container class="mt-5 md-size-100">
        <mdb-carousel :interval="8000" showIndicators multi slide>
          <mdb-carousel-item>
            <mdb-row>
              <mdb-col md="4">
                <mdb-card class="mb-2">
                  <mdb-card-image
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg"
                    alt="Card image cap"
                    waves
                  ></mdb-card-image>
                  <mdb-card-body>
                    <mdb-card-title>Card title</mdb-card-title>
                    <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                    <mdb-btn color="primary">Button</mdb-btn>
                  </mdb-card-body>
                </mdb-card>
              </mdb-col>
              <mdb-col md="4" class="clearfix d-none d-md-block">
                <mdb-card class="mb-2">
                  <mdb-card-image
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                    alt="Card image cap"
                    waves
                  ></mdb-card-image>
                  <mdb-card-body>
                    <mdb-card-title>Card title</mdb-card-title>
                    <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                    <mdb-btn color="primary">Button</mdb-btn>
                  </mdb-card-body>
                </mdb-card>
              </mdb-col>
              <mdb-col md="4" class="clearfix d-none d-md-block">
                <mdb-card class="mb-2">
                  <mdb-card-image
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
                    alt="Card image cap"
                    waves
                  ></mdb-card-image>
                  <mdb-card-body>
                    <mdb-card-title>Card title</mdb-card-title>
                    <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                    <mdb-btn color="primary">Button</mdb-btn>
                  </mdb-card-body>
                </mdb-card>
              </mdb-col>
            </mdb-row>
          </mdb-carousel-item>
          <mdb-carousel-item>
            <mdb-row>
              <mdb-col md="4">
                <mdb-card class="mb-2">
                  <mdb-card-image
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(60).jpg"
                    alt="Card image cap"
                    waves
                  ></mdb-card-image>
                  <mdb-card-body>
                    <mdb-card-title>Card title</mdb-card-title>
                    <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                    <mdb-btn color="primary">Button</mdb-btn>
                  </mdb-card-body>
                </mdb-card>
              </mdb-col>
              <mdb-col md="4" class="clearfix d-none d-md-block">
                <mdb-card class="mb-2">
                  <mdb-card-image
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(47).jpg"
                    alt="Card image cap"
                    waves
                  ></mdb-card-image>
                  <mdb-card-body>
                    <mdb-card-title>Card title</mdb-card-title>
                    <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                    <mdb-btn color="primary">Button</mdb-btn>
                  </mdb-card-body>
                </mdb-card>
              </mdb-col>
              <mdb-col md="4" class="clearfix d-none d-md-block">
                <mdb-card class="mb-2">
                  <mdb-card-image
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(48).jpg"
                    alt="Card image cap"
                    waves
                  ></mdb-card-image>
                  <mdb-card-body>
                    <mdb-card-title>Card title</mdb-card-title>
                    <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                    <mdb-btn color="primary">Button</mdb-btn>
                  </mdb-card-body>
                </mdb-card>
              </mdb-col>
            </mdb-row>
          </mdb-carousel-item>
          <mdb-carousel-item>
            <mdb-row>
              <mdb-col md="4">
                <mdb-card class="mb-2">
                  <mdb-card-image
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(53).jpg"
                    alt="Card image cap"
                    waves
                  ></mdb-card-image>
                  <mdb-card-body>
                    <mdb-card-title>Card title</mdb-card-title>
                    <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                    <mdb-btn color="primary">Button</mdb-btn>
                  </mdb-card-body>
                </mdb-card>
              </mdb-col>
              <mdb-col md="4" class="clearfix d-none d-md-block">
                <mdb-card class="mb-2">
                  <mdb-card-image
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(45).jpg"
                    alt="Card image cap"
                    waves
                  ></mdb-card-image>
                  <mdb-card-body>
                    <mdb-card-title>Card title</mdb-card-title>
                    <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                    <mdb-btn color="primary">Button</mdb-btn>
                  </mdb-card-body>
                </mdb-card>
              </mdb-col>
              <mdb-col md="4" class="clearfix d-none d-md-block">
                <mdb-card class="mb-2">
                  <mdb-card-image
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(51).jpg"
                    alt="Card image cap"
                    waves
                  ></mdb-card-image>
                  <mdb-card-body>
                    <mdb-card-title>Card title</mdb-card-title>
                    <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                    <mdb-btn color="primary">Button</mdb-btn>
                  </mdb-card-body>
                </mdb-card>
              </mdb-col>
            </mdb-row>
          </mdb-carousel-item>
        </mdb-carousel>
      </mdb-container>

    </div>
  </div>
</template>


<script>
import {
  mdbCarousel,
  mdbCarouselItem,
  mdbCarouselCaption,
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbCard,
  mdbCardImage,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText,
  mdbBtn
} from "mdbvue";
export default {
  name: "Home",
  components: {
    mdbCarousel,
    mdbCarouselItem,
    mdbCarouselCaption,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbBtn
  }
};
</script>