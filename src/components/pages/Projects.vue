<template>
    <div>
        <Navbar />
        <PageTitle />
        <Projects />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../layout/Navbar'
import PageTitle from '../projects/PageTitle'
import Projects from '../projects/Projects'
import Footer from '../layout/Footer'

export default {
    name: 'AboutUs',
    components: {
        Navbar,
        PageTitle,
        Projects,
        Footer,
    }
}
</script>