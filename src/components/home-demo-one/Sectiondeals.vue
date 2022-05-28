<template>
    <div class="blog-area ptb-70 pt-0">
        <div class="containp  container">
            <!-- <div class="section-title" >
                <div class="row">
                    <div class="col-md-6">
                        <h4 class="deal-title">الصفقات و المزادات</h4>

                    </div>

                    <div class="col-md-6">
                <a href="/contact" class="button">جميع الخدمات</a>

                    </div>
                </div>
            </div> -->
            <div class="section-title">
                <div class="row">
                    <div class="col-md-6  row-col-with mt-1" style="    width: 50%;">
                        <h4>الصفقات و المزادات</h4>

                    </div>
                    <div class="col-md-6   " style="    width: 50%;">
                        <router-link to="/DealsAuctions" class="button"> عرض الجميع </router-link>

                    </div>
                </div>
            </div>

            <div class="feedback-slides">
                <carousel :autoplay="3500" :settings="settings" :wrap-around="true" :breakpoints="breakpoints">
                    <slide v-for="slide in carouselItems" :key="slide.id">

                        <div class="single-deals-post">

                            <div class="deals-post-content">
                                <div class="row section-title">
                                    <span>شركة فرسان</span>
                                    <h5 class="titleDEals">
                                        <router-link to="/deals-auctions-details">{{ slide.title }}</router-link>
                                        <i class="fas fa-angle-left	"></i>
                                    </h5>

                                    <p class="desc">{{ slide.description }}</p>


                                </div>
                                <div class="row">

                                    <span>تنتهي الصفقة في</span>
                                    <div>
                                        <Countdown deadline="2023-12-25 00:00:00" :showLabels="false"
                                            mainFlipBackgroundColor="#d7a358" secondFlipBackgroundColor="#d7a358"
                                            countdownSize="1.1rem" mainColor="#ffff" />

                                    </div>
                                </div>

                                <div class="row pt">
                                    <div class="col-md-6 col-sm-6  price-deals " style="width: 50%;">


                                        <router-link to="/deals-auctions-details" class="btn link"
                                            style="margin-top: 5px; padding: 5px 1px 5px 1px;">{{ slide.button }}
                                        </router-link>
                                    </div>
                                    <div class="col-md-6 col-sm-6 pt-2 price-deals" style="width: 50%;">
                                        <h6 class="typeDeals">{{ slide.typeDeals }}</h6>
                                        <span>{{ slide.price }}</span>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </slide>

                    <template #addons>
                        <!-- <Navigation /> -->
                        <Pagination />
                    </template>
                </carousel>
            </div>
        </div>
    </div>


</template>

<script>
import {
    defineComponent
} from 'vue';
import {
    Carousel,
    Slide,
    Pagination,
} from 'vue3-carousel';
import {
    Countdown
} from 'vue3-flip-countdown'

import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
    name: 'Sectiondeals',
    components: {
        Countdown,
        Carousel,
        Slide,
        Pagination,
    },
    data: () => ({
        carouselItems: [{
            id: 1,
            title: 'استشارات و تصميم نماذج الأعمال',
            typeDeals: 'صفقة بقيمة',
            price: '500000 ريال',
            button: 'شراء',
            color: '#ebde46',
            description: 'تتيح خدمة تحديد و تعريف التحديات لمنسوبي الجهات الحكوميةتتيح خدمة تحديد و تعريف التحديات لمنسوبي الجهات الحكوميةتتيح خدمة تحديد و تعريف التحديات لمنسوبي الجهات الحكوميةتتيح خدمة تحديد و تعريف التحديات لمنسوبي الجهات الحكومية',
        },
        {
            id: 2,
            title: 'شراء مواد حديد',
            typeDeals: 'سعر المشاركة بالمزاد',
            price: '500 ريال تأمين',
            button: 'مشاركة بالمزاد',
            description: 'تتيح خدمة تحديد و تعريف التحديات لمنسوبي الجهات الحكوميةتتيح خدمة تحديد و تعريف التحديات لمنسوبي الجهات الحكوميةتتيح خدمة تحديد و تعريف التحديات لمنسوبي الجهات الحكوميةتتيح خدمة تحديد و تعريف التحديات لمنسوبي الجهات الحكومية',
        },
        {
            id: 3,
            title: 'توليد الأفكار و إدارتها',
            typeDeals: 'صفقة بقيمة',
            price: '500000 ريال',
            button: 'شراء',
            description: 'تتيح خدمة تحديد و تعريف التحديات لمنسوبي الجهات الحكوميةتتيح خدمة تحديد و تعريف التحديات لمنسوبي الجهات الحكوميةتتيح خدمة تحديد و تعريف التحديات لمنسوبي الجهات الحكوميةتتيح خدمة تحديد و تعريف التحديات لمنسوبي الجهات الحكومية',
        },
        {
            id: 4,
             title: 'شراء مواد حديد',
            typeDeals: 'مزاد',
            button: 'مشاركة بالمزاد',
            description: 'تتيح خدمة تحديد و تعريف التحديات لمنسوبي الجهات الحكوميةتتيح خدمة تحديد و تعريف التحديات لمنسوبي الجهات الحكوميةتتيح خدمة تحديد و تعريف التحديات لمنسوبي الجهات الحكوميةتتيح خدمة تحديد و تعريف التحديات لمنسوبي الجهات الحكومية',
        },
        {
            id: 5,
            typeDeals: 'صفقة بقيمة',
            price: '500000 ريال',
            button: 'شراء',
            description: 'تتيح خدمة تحديد و تعريف التحديات لمنسوبي الجهات الحكوميةتتيح خدمة تحديد و تعريف التحديات لمنسوبي الجهات الحكوميةتتيح خدمة تحديد و تعريف التحديات لمنسوبي الجهات الحكوميةتتيح خدمة تحديد و تعريف التحديات لمنسوبي الجهات الحكومية',
        },
        ],
        settings: {

            snapAlign: 'center',
        },
        breakpoints: {
            // 700px and up
            500: {
                itemsToShow: 1,
                snapAlign: 'center',
            },
            // 1024 and up
            1024: {
                itemsToShow: 3,
                snapAlign: 'start',
            },
        },
    }),
})

</script>
