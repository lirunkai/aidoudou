<template>
  <div id="toolbar">
    <i @click="addNote" class="glyphicon  glyphicon-plus"></i>
    <i @click="toggleFavorite" class="glyphicon glyphicon-star"
    :class="{starred:activeNote.favorite}"></i>
    <i @click="deleteNote" class="glyphicon glyphicon-remove"></i>
  </div>
</template>

<script type="text/javascript">
  import {addNote, deleteNote, toggleFavorite} from '../vuex/action.js'
  export default {
    vuex: {
      getters: {
        activeNote: state => state.actoveNote
      },
      actions: {
        addNote,
        deleteNote,
        toggleFavorite
      }
    }
  }
</script>
