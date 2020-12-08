<template>
  <div class="version-selector">
    <select @change="handleSelect">
      <option value="v1" selected>v1</option>
    </select>
  </div>
</template>

<script>
export default {
  methods: {
    handleSelect(e) {
      if (e.target.value === 'v0') {
        window.location.href = 'https://v0.saojs.org/'
      }
    }
  }
}
</script>

<style scoped>
.version-selector {
  padding: 1.5rem 1.5rem 0;
}
</style>
