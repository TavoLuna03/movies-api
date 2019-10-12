<template>

  <div class="container-fluid">
    <h1 class="text-center">Most Popular Movies</h1>
     <b-card-group deck class="mt-4">
      <b-row>
        <b-col v-for="movie in sortedMovies" :key="movie.id" cols="4">
          <Cart :movie="movie" />
        </b-col>
      </b-row>
    </b-card-group>
    <pre>{{ movies }}</pre>
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
    ...mapState({ movies: state => state.movies}),
    sortedMovies() {
      return this.movies.sort((a, b) => b.vote_average - a.vote_average);
    }

  },
  mounted() {
    this.$store.dispatch("getMovies");
  }
};
</script>


