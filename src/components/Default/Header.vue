<template>
  <header class="site-header  is-revealing" v-if="isActive">
    {{ isDisplay }}
    <div class="container">
      <div class="site-header-inner">
        <div class="brand header-brand pt-5 absolute w-10">
          <h1 class="m-0">
            <a href="#">
              <g-image src="~/assets/images/icons8-code-64.png" alt="Putera Kahfi Class" />
            </a>
          </h1>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: ["isActive"]
};
</script>

<style>
</style>