<template>
    <div class="section-area ptb-70 pt-0">
        <div class="containp  container">
            <div class="section-title">
                <div class="row">
                    <div class="col-md-6  row-col-with" style="    width: 50%;">
                        <h4>أحدث المشاريع</h4>

                    </div>
                    <div class="col-md-6   " style="    width: 50%;">
                        <router-link to="/projects" class="button"> عرض الجميع  </router-link>

                    </div>
                </div>
            </div>
            <div class="feedback-slides">
                <carousel :autoplay="5000" :settings="settings" :wrap-around="true" :breakpoints="breakpoints">
                    <slide v-for="slide in carouselItems" :key="slide.id">

                        <div class="single-section-post">
                            <div class="section-image">
                                <router-link to="/ProjectDetails">
                                    <img :src="slide.image" alt="image">
                                </router-link>

                                <div class="date">
                                    <i class="far fa-calendar-alt"></i> 2022-04-08
                                </div>
                            </div>

                            <div class="section-post-content">
                                <div class="row section-title">
                                    <h6>
                                        <router-link to="/ProjectDetails">{{ slide.title }}</router-link>
                                    </h6>

                                    <span>{{ slide.location }}</span>
                                    <br>
                                    <span>{{ slide.category }}</span>
                                </div>
                                <div class="row">

                                    <div class="col-md-6 col-xs-12 section-title date-end" >
                                        <span>اخر موعد تقديم 08/05/2022</span>
                                        <br>
                                        <router-link to="/ProjectDetails" class="show">تقديم عرض</router-link>
                                    </div>
                                    <div class="col-md-6 col-xs-12 price">
                                        <p>قيمة المشروع</p>
                                        <span>الأفضل سعر</span>
                                    </div>
                                </div>

                                <!-- <p>{{slide.description}}</p> -->
                                <!-- <router-link to="/blog-details" class="read-more-btn">Read More <i
                                        class="fas fa-arrow-right"></i></router-link> -->
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
    // Navigation
} from 'vue3-carousel';

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
        carouselItems: [{
            id: 1,
            image: require('../../assets/images/blog/blog-1.jpg'),
            title: 'مشروع تأثيث مبنى في طريق النهضة',
            location: 'الرياض - طريق النهضة',
            category: 'التصنيف: أثاث',
            description: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
        },
        {
            id: 2,
            image: require('../../assets/images/blog/blog-2.jpg'),
            title: 'مشروع تأثيث مبنى في طريق النهضة',
            location: 'الرياض - طريق النهضة',
            category: 'التصنيف: أثاث',
            description: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
        },
        {
            id: 3,
            image: require('../../assets/images/blog/blog-3.jpg'),
            title: 'مشروع تأثيث مبنى في طريق النهضة',
            location: 'الرياض - طريق النهضة',
            category: 'التصنيف: أثاث',
            description: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis..',
        },
        {
            id: 4,
            image: require('../../assets/images/blog/blog-3.jpg'),
            title: 'مشروع تأثيث مبنى في طريق النهضة',
            location: 'الرياض - طريق النهضة',
            category: 'التصنيف: أثاث',
            description: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis..',
        },
        {
            id: 5,
            image: require('../../assets/images/blog/blog-2.jpg'),
            title: 'مشروع تأثيث مبنى في طريق النهضة',
            location: 'الرياض - طريق النهضة',
            category: 'التصنيف: أثاث',
            description: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
        },
        ],
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
})
</script>