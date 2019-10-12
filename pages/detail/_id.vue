<template>
  <div class="container-fluid">
    <h1 class="text-center">Movie - {{ movie.title}}</h1>
     <b-card-group deck class="mt-4">
      <b-row>
        <b-col cols="4">
          <b-card
                :title="`${movie.title}`"
                :img-src="`https://image.tmdb.org/t/p/w1000_and_h563_face/${movie.poster_path}`"
                img-alt="Image"
                img-top
              >
              <b-card-text>
                {{ movie.overview }}
              </b-card-text>
          </b-card>
        </b-col>
        <b-col cols="8">
          <div>
            <h1>Production Companies</h1>
            <ul class="list-unstyled">
              <b-media  v-for="item in sortedMovie.production_companies" :key="item" tag="li">
                <h5 class="mt-0 mb-1">{{ item.name}}</h5>
                <p class="mb-0">
                  {{ item.origin_country}}
                </p>
              </b-media>
            </ul>
          </div>
        </b-col>
      </b-row>
    </b-card-group>
  </div>

</template>

<script>
import Cart from "~/components/Cart.vue";
import { mapState } from "vuex";

export default {
  layout: 'layouts/default',
  components: {
    Cart
  },
  computed: {
    ...mapState({ movie: state => state.movie}),
    sortedMovie() {
      return this.movie;
    }

  },
  mounted() {
    this.$store.dispatch("getMovieDetail" , this.$route.params.id);
  }
};
</script>
