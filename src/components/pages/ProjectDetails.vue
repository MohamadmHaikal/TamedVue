<template>
    <div>
        <Navbar />
        <PageTitle />
        <Details />
        <OtherDeals />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../layout/Navbar'
import PageTitle from '../project details/PageTitle'
import Details from '../project details/Details'
import Footer from '../layout/Footer'

export default {
    name: 'ProjectDetails',
    components: {
        Navbar,
        PageTitle,
        Details,
        Footer,
    }
}
</script>