<template>
  <Navbar />
  <section id="home"><Profile /></section>
  <section id="about"><About_us /></section>
  <section id="skills"><Myskill /></section>
  <section id="Front_end"><Front_end /></section>
  <section id="Back_end"><Back_end /></section>
  <section id="databases"><Databases /></section>
  <section id="os"><Os /></section>
  <section id="contacts"><contact /></section>
  <Footer />
</template>

<script>
import Navbar from './components/Navbar.vue'
import Profile from './components/Profile.vue'
import About_us from './components/About_us.vue'
import Myskill from './components/Myskill.vue'
import Front_end from './components/Front_end.vue'
import Back_end from './components/Back_end.vue'
import Databases from './components/Databases.vue'
import Os from './components/Os.vue'
import contact from './components/contact.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Navbar,
    Profile,
    About_us,
    Myskill,
    Front_end,
    Back_end,
    Databases,
    Os,
    contact,
    Footer
  }
}
</script>
