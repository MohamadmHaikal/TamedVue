<template>
    <div>
        <Navbar />
        <PageTitle />
        <Details />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../layout/Navbar'
import PageTitle from '../profile/PageTitle'
import Details from '../profile/Details'
import Footer from '../layout/Footer'

export default {
    name: 'profile',
    components: {
        Navbar,
        PageTitle,
        Details,
        Footer,
    }
}
</script>