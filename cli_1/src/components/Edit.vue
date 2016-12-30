<template>
  <div id="editor">
    <textarea class="form-control" :value="activeNoteText" @input="editNote"></textarea>
  </div>
</template>

<script type="text/javascript">
  import { editNote } from '../vuex/action.js'
  export default {
    vuex: {
      getters: {
        activeNoteText: state => state.activeNote.text
      },
      actions: {
        editNote
      }
    }
  }
</script>
