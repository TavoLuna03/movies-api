import Vuex from "vuex";
import Vue from "vue";


Vue.use(Vuex);

const store = () => {
  return new Vuex.Store({
    state:{
      movies : [],
      movie: []
    },
    mutations:{
      async setMovies(state, movies){
        state.movies = movies;
      },
      async setMovieDetail(state, movie){
        state.movie = movie;
      }
    },
    actions: {
      async getMovies(context) {
        let result =  await this.$axios.$get('movie/popular?api_key=1f8689e240f206fdf271aa4b305f2889');
        context.commit('setMovies', result.results)
      },
      async getMovieDetail(context , id) {
        let result =  await this.$axios.$get('movie/'+id+'?api_key=1f8689e240f206fdf271aa4b305f2889');
        context.commit('setMovieDetail', result)
      }
    }

  })
}
export default store;
