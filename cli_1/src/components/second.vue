<template>
  <div id="second">
    <h1>is a page</h1>
    <p>{{ author }}</p>
    <p>thanks the world</p>
    <ul>
      <li v-for="article in articles">
        {{ article.title }}
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
  export default {
    data () {
      return {
        author: 'lirunkai',
        articles: []
      }
    },
    mounted: function(){
      this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10',{},{
        headers: {

        },
        emulateJSON: true
      }).then(function(response){
        console.log(response)
        this.articles = response.data.subjects
      },function(response){
        console.log(response)
      })
    }
  }
</script>

<style media="screen">

</style>
