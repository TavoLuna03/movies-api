<template>
  <b-card
        :title="`${movie.title}`"
        :img-src="`https://image.tmdb.org/t/p/w1000_and_h563_face/${movie.poster_path}`"
        img-alt="Image"
        img-top
      >
      <b-card-text>
        {{ movie.overview }}
      </b-card-text>
      <b-button :to="`detail/${movie.id}`">View Detail</b-button>
  </b-card>
</template>
<script>
export default {
    name: 'CartComponent',
    props : {
        movie : {
            type: Object,
            default: []
        }
    }

}
</script>
