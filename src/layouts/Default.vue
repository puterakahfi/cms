<template>
  <div class="layout">
    <div class="body-wrap is-revealing">
      <Header :isActive="false"></Header>
      <main>
        <Hero />
        <List />
        <Features />
        <Accordion />
        <Testimonials />
        <Pricing :isActive="true" />
        <Faq class="mt-20" />
        <Cta />
      </main>
      <Footer />
    </div>

    <slot />
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style>
</style>

<script>
import Header from "~/components/Default/Header";
import Hero from "~/components/Default/Hero";
import Features from "~/components/Default/Features";
import List from "~/components/Default/List";
import Testimonials from "~/components/Default/Testimonials";
import Accordion from "~/components/Default/Accordion";
import Faq from "~/components/Default/Faq";
import Pricing from "~/components/Default/Pricing";
import Footer from "~/components/Default/Footer";
import Cta from "~/components/Default/Cta"

export default {
  metaInfo: {
    script: [
      { src: "js/main.min.js" },
      { src: "https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js" }
    ]
  },
  components: {
    Header,
    Hero,
    List,
    Features,
    Testimonials,
    Accordion,
    Faq,
    Pricing,
    Footer,
    Cta
  }
};
</script>
