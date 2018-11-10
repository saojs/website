<template>
  <div class="asciinema"></div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },

  mounted() {
    this.showPlayer()
  },

  methods: {
    showPlayer() {
      const script = document.createElement('script')
      script.id = `asciicast-${this.id}`
      script.src = `https://asciinema.org/a/${this.id}.js`
      script.setAttribute('data-preload', true)
      this.$el.appendChild(script)
      this.hidePreview = true
    }
  }
}
</script>
