<template>
    <div class="section-area ptb-70 pt-0">
        <div class="containp  container">
            <div class="section-title">
                <div class="row">
                    <div class="col-md-6  row-col-with" style="    width: 50%;">
                        <h4 class="project-title-section">أحدث المشاريع</h4>

                    </div>
                    <div class="col-md-6   " style="    width: 50%;">
                        <router-link to="/projects" class="button"> عرض الجميع </router-link>

                    </div>
                </div>
            </div>
            <div class="feedback-slides">
                <carousel :autoplay="carouselItems.length > 3 ? 5000 : 300000" :settings="settings" :wrap-around="true"
                    :breakpoints="breakpoints">
                    <slide v-for="slide in carouselItems" :key="slide.id">

                        <div v-if="slide.id != '!!'" class="single-section-post">
                            <div class="section-image">

                                <img :src="slide.cover" alt="image">


                                <div class="date">
                                    <i class="far fa-calendar-alt"></i> {{ slide.created }}
                                </div>
                            </div>

                            <div class="section-post-content">
                                <div class="row section-title">
                                    <h6>
                                        <router-link :to="{ name: 'details', params: { projectId: slide.id } }">{{ slide.title }}</router-link>
                                    </h6>

                                    <span>{{ slide.city }} - {{ slide.neighborhood }}</span>
                                    <br>
                                    <span>{{ slide.activity }}</span>
                                </div>
                                <div class="row">

                                    <div class="col-md-6 col-xs-12 section-title date-end">
                                        <span>اخر موعد تقديم {{ slide.created }}</span>
                                        <br>
                                        <router-link :to="{ name: 'details', params: { projectId: slide.id } }"
                                            class="show">تقديم عرض</router-link>
                                    </div>
                                    <div class="col-md-6 col-xs-12 price">
                                        <p>قيمة المشروع</p>
                                        <span v-if="slide.pricestatus == 'on'">الأفضل سعر</span>
                                        <span v-else>{{ rial }}{{ slide.price }}</span>
                                    </div>
                                </div>

                                <!-- <p>{{slide.description}}</p> -->
                                <!-- <router-link to="/blog-details" class="read-more-btn">Read More <i
                                        class="fas fa-arrow-right"></i></router-link> -->
                            </div>
                        </div>


                    </slide>

                    <template v-if="carouselItems.length > 3" #addons>
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
    // Navigation
} from 'vue3-carousel';
import axios from 'axios';
import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
    name: 'SectionProject',
    components: {
        Carousel,
        Slide,
        Pagination,
        // Navigation,
    },
    data: () => ({
        carouselItems: [
            {
                id: '!!',
                image: require('../../assets/images/blog/blog-1.jpg'),
                title: 'مشروع تأثيث مبنى في طريق النهضة',
                location: 'الرياض - طريق النهضة',
                category: 'التصنيف: أثاث',
                description: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
            },
        ],
        rial: 'ريال',
        settings: {

            snapAlign: 'center',
            // transition:300
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

    async mounted() {
        const { data } = await axios.get(
            'https://login.tamedksa.com/api/ads/1/all'
        );
        this.carouselItems = data;

    }
})
</script>