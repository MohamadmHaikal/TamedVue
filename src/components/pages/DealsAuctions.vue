<template>
    <div>
        <Navbar />
        <PageTitle />
        <DealsAuctions />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../layout/Navbar'
import PageTitle from '../deals-auctions/PageTitle'
import DealsAuctions from '../deals-auctions/DealsAuctions'
import Footer from '../layout/Footer'

export default {
    name: 'deals-auctions',
    components: {
        Navbar,
        PageTitle,
        DealsAuctions,
        Footer,
    }
}
</script>