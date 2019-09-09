<template>
  <div class="layout">
    <div class="body-wrap is-revealing">

      <Navbar/>
      <Header :isActive="false"></Header>
      <main>

       
    
        <Hero />
        <List />
        <slot />
        <LatestClass />
        <Accordion />
        <Testimonials />
        <Pricing :isActive="true" />
        <Faq class="mt-20" />
        <Cta />
      </main>
      <Footer />
    </div>

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
import LatestClass from "~/components/Default/LatestClass";
import List from "~/components/Default/List";
import Testimonials from "~/components/Default/Testimonials";
import Accordion from "~/components/Default/Accordion";
import Faq from "~/components/Default/Faq";
import Pricing from "~/components/Default/Pricing";
import Footer from "~/components/Default/Footer";
import Cta from "~/components/Default/Cta";
import Navbar from "~/components/Layout/Navbar";

export default {
  metaInfo: {
    link: [{ rel: "stylesheet", href: "~/assets/css/style.css" }],
    script: [
      { src: "https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js" },
      { src: "js/main.min.js" },
    ]
  },
  components: {
    Header,
    Hero,
    List,
    LatestClass,
    Testimonials,
    Accordion,
    Faq,
    Pricing,
    Footer,
    Cta,
    Navbar
  }
};
</script>
