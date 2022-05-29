<template>
    <div>
        <div class="about-area pb-70">
            <div class="containp  container">
                <div class="row mt-4">
                    <div class="col-lg-2">


                        <input type="text" placeholder="البحث عن خدمة" style="   width: 100%;
    
                            border-radius: 20px;
                            border-color: #b7b7b7;
                            border-width: 1px;
                            padding: 8px 19px 11px 4px;">
                        <i class='fas fa-search' style="    right: 85%;
    bottom: 48%;
    color: #b7b7b7;
    position: relative;"></i>


                    </div>
                    <div class="col-md-2  text-center btn-filter"><a href="/login" class="btn btn-logo" style="border-radius: 25px;
    
      background-color: #ffffff;
    border: 1px solid #019aa2;
    color: #019aa2; padding: 7px 20px 7px 20px;"> جميع المزادات / الصفقات </a></div>
                    <div class="col-md-2 text-center btn-filter"><a href="/login" class="btn btn-logo" style="border-radius: 25px;
    background-color: #9fcf95;
    color: white;
    padding: 7px 42px 7px 42px;">مزادات قائمة </a></div>
                    <div class="col-md-2  text-center btn-filter"><a href="/login" class="btn btn-logo" style="border-radius: 25px;
    
      background-color: #ffffff;
    border: 1px solid #fba534;
    color: #fba534; padding: 7px 42px 7px 42px;"> مزادات قريبة </a></div>
                    <div class="col-md-2 text-center btn-filter"><a href="/login" class="btn btn-logo" style="border-radius: 25px;
    
      background-color: #ffffff;
    border: 1px solid #019aa2;
    color: #019aa2; padding: 7px 42px 7px 42px; btn-filter"> جميع الصفقات </a></div>

                    <div class="col-md-2 text-center"><a href="/login" class="btn btn-logo" style="border-radius: 25px;
    background-color: #039ca4;
    color: white;
    padding: 7px 42px 7px 42px;">بحث متقدم </a></div>
                </div>

                <div class="mt-2" style="text-align: -webkit-center;">
                    <div class="col-10 mt-3 text-center">
                        <div class="card"
                            style="border-radius: 14px;    margin-bottom: 40px; box-shadow: 1px 1px 5px 2px #ece9e9;">
                            <div class="card-horizontal" style=" display: flex;
    flex: 1 1 auto; border-radius: 13px 13px 13px 13px; ">

                                <div class="card-body"
                                    style="border-radius: 13px 13px 13px 13px; padding-right: 0px; padding-left: 0px;">
                                    <div
                                        style=" border-bottom: 1px solid #d8d8d8; padding-left: 1rem; padding-right: 1rem ;">
                                        <div class="row text-end">
                                            <div class="col-md-9">
                                                <div class="row text-end">
                                                    <div class="col-md-4">
                                                        <i class='far fa-clock' style="color: #ababab;"></i>
                                                        <span style="color: #ababab;"> التاريخ: </span>
                                                        <span style="color: #ababab;"> 2022/02/22</span>

                                                    </div>
                                                    <div class="col-md-7 author-deals-div">
                                                        <a href="#" class="author-deals">
                                                            <span style="color: #ababab;">مقدم بواسطة : </span> <span
                                                                style="color:#019aa2;">شركة فرسان للمقاولات</span> </a>
                                                    </div>

                                                </div>

                                            </div>
                                            <div class="col-md-3 counter-title " style="padding-right: 20px;">
                                                <span style="color: #019aa2;"> بداية المزاد </span>
                                                <Countdown deadline="2023-12-25 00:00:00" :showLabels="false"
                                                    mainFlipBackgroundColor="#d7a358"
                                                    secondFlipBackgroundColor="#d7a358" countdownSize="1.1rem"
                                                    mainColor="#ffff" />
                                            </div>

                                        </div>

                                        <div class="row text-end mt-3 mb-2">
                                            <div class="col-md-8">
                                                <span style="color: #019aa2;"> مواد حديد بناء للبيع </span>
                                                <p class="mt-2" style="color: rgb(87 83 77);"> مطلوب شركة لتأثيث مبنى
                                                    لحي النهضة حسب المواصفات المرفقة</p>
                                            </div>
                                            <div class="col-md-4 mt-1 lg-counter">

                                                <Countdown deadline="2023-12-25 00:00:00" :showLabels="false"
                                                    mainFlipBackgroundColor="#d7a358"
                                                    secondFlipBackgroundColor="#d7a358" countdownSize="1.1rem"
                                                    mainColor="#ffff" />
                                            </div>

                                        </div>

                                    </div>
                                    <div
                                        style=" border-bottom: 1px solid #d8d8d8; padding-left: 1rem; padding-right: 1rem ;">
                                        <div class="row text-end mt-2">
                                            <div class="col-md-12">
                                                <span style="color: #019aa2;"> النوع : </span>
                                                <span style="color: rgb(87 83 77);"> حديد</span>

                                            </div>
                                            <div class="col-md-8 mt-2">


                                                <span style="color: rgb(87 83 77);     color: rgb(87 83 77);
    font-size: 12px;"><i class='fas fa-map-marker-alt' style="color: #ababab;"></i> العنوان : </span>
                                                <span style="color: rgb(87 83 77);     color: rgb(87 83 77);
    font-size: 12px;"> المملكة العربية السعودية - الرياض - طريق النهضة</span>
                                            </div>
                                            <div class="col-md-4 mt-2 mb-2">
                                                <span style="color: #019aa2;  font-size: 12px;"> الرقم المرجعي : </span>
                                                <span style="color: rgb(87 83 77);  font-size: 12px;"> 25887496</span>

                                            </div>
                                        </div>

                                    </div>
                                    <div style="padding-left: 1rem; padding-right: 1rem ; ">
                                        <div class="row">
                                            <div class="col-md-3 col-6  text-end mt-2 ">
                                                <p class="text-end" style="color: #019aa2;  font-size: 12px;">تاريخ
                                                    انتهاء المزاد</p>
                                                <i class='far fa-calendar-alt' style="color: #37D337;"></i>
                                                <span class="date-icon"
                                                    >
                                                    2022-05-22 </span>
                                                <span class="time-icon"
                                                    >
                                                    <i class='far fa-clock' style="color: #37D337;"></i> 12:00</span>

                                            </div>
                                            <div class="col-md-2  col-6  row-col-with view" style="margin-top: 43px;">
                                                <span style="color: #019aa2;  font-size: 12px; padding-right: 5px;">
                                                    2500 <i class='far fa-eye' style="color: #37D337;"></i></span>

                                            </div>
                                            <div class="col-md-2 col-6  mt-3">
                                                <h6 class="text-center" style="color: #019aa2;  font-size: 12px;">
                                                    المشاركين</h6>

                                                <span style="color:#019aa2;  font-size: 20px; padding-right: 2px;"> 40
                                                </span>
                                                <i class='far fa-file-alt	' style="color: #019aa2;     font-size: 25px;
"></i>

                                            </div>
                                            <div class="col-md-2 col-6   mt-3">

                                                <h6 class="text-center" style="color: #019aa2;  font-size: 12px;">تأمين
                                                    المشاركة</h6>

                                                <span style="color:#d4a259;  font-size: 20px; padding-right: 2px;"> 500
                                                    ريال </span>

                                            </div>

                                            <div class="col-md-3 col-6 ">
                                                <router-link to="/deals-auctions-details" class="btn btn-logo" style="    border-radius: 16px;
    background-color: #039ca4;
    color: white;
    margin-top: 25px;
    padding: 7px 30px 7px 30px;">شارك بالمزاد</router-link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="img-square-wrapper " style="     border-right: 1px solid #d8d8d8;
    width: 265px;
    padding-top: 115px;
    height: 280px;
    border-right: 1px solid rgb(216, 216, 216);
">
                                    <h1 style="color: #019aa2;">مزاد </h1>
                                    <!-- <img class="" style="border-radius: 13px 0px 0px 13px;     border-right: 1px solid #d8d8d8;" src="http://via.placeholder.com/300x180" alt="Card image cap"> -->
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="mt-2" style="text-align: -webkit-center;">
                    <div class="col-10 mt-3 text-center">
                        <div class="card"
                            style="border-radius: 14px;    margin-bottom: 40px; box-shadow: 1px 1px 5px 2px #ece9e9;">
                            <div class="card-horizontal" style=" display: flex;
    flex: 1 1 auto; border-radius: 13px 13px 13px 13px; ">

                                <div class="card-body"
                                    style="border-radius: 13px 13px 13px 13px; padding-right: 0px; padding-left: 0px;">
                                    <div
                                        style=" border-bottom: 1px solid #d8d8d8; padding-left: 1rem; padding-right: 1rem ;">
                                        <div class="row text-end">
                                            <div class="col-md-9">
                                                <div class="row text-end">
                                                    <div class="col-md-4">
                                                        <i class='far fa-clock' style="color: #ababab;"></i>
                                                        <span style="color: #ababab;"> التاريخ: </span>
                                                        <span style="color: #ababab;"> 2022/02/22</span>

                                                    </div>
                                                    <div class="col-md-7  author-deals-div">
                                                        <a href="#" class="author-deals">
                                                            <span style="color: #ababab;">مقدم بواسطة : </span> <span
                                                                style="color:#019aa2;">شركة فرسان للمقاولات</span> </a>
                                                    </div>

                                                </div>

                                            </div>
                                            <div class="col-md-3 counter-title" style="padding-right: 20px;">
                                                <span style="color: #019aa2;"> نهاية الصفقة </span>
                                                <Countdown deadline="2023-12-25 00:00:00" :showLabels="false"
                                                    mainFlipBackgroundColor="#019aa2"
                                                    secondFlipBackgroundColor="#019aa2" countdownSize="1.1rem"
                                                    mainColor="#ffff" />
                                            </div>

                                        </div>

                                        <div class="row text-end mt-3 mb-2">
                                            <div class="col-md-8">
                                                <span style="color: #019aa2;"> مواد حديد بناء للبيع </span>
                                                <p class="mt-2" style="color: rgb(87 83 77);"> مطلوب شركة لتأثيث مبنى
                                                    لحي النهضة حسب المواصفات المرفقة</p>
                                            </div>
                                            <div class="col-md-4 mt-1 lg-counter">

                                                <Countdown deadline="2023-12-25 00:00:00" :showLabels="false"
                                                    mainFlipBackgroundColor="#019aa2"
                                                    secondFlipBackgroundColor="#019aa2" countdownSize="1.1rem"
                                                    mainColor="#ffff" />
                                            </div>

                                        </div>

                                    </div>
                                    <div
                                        style=" border-bottom: 1px solid #d8d8d8; padding-left: 1rem; padding-right: 1rem ;">
                                        <div class="row text-end mt-2">
                                            <div class="col-md-12">
                                                <span style="color: #019aa2;"> النوع : </span>
                                                <span style="color: rgb(87 83 77);"> حديد</span>

                                            </div>
                                            <div class="col-md-8 mt-2">


                                                <span style="color: rgb(87 83 77);     color: rgb(87 83 77);
    font-size: 12px;"><i class='fas fa-map-marker-alt' style="color: #ababab;"></i> العنوان : </span>
                                                <span style="color: rgb(87 83 77);     color: rgb(87 83 77);
    font-size: 12px;"> المملكة العربية السعودية - الرياض - طريق النهضة</span>
                                            </div>
                                            <div class="col-md-4 mt-2 mb-2">
                                                <span style="color: #019aa2;  font-size: 12px;"> الرقم المرجعي : </span>
                                                <span style="color: rgb(87 83 77);  font-size: 12px;"> 25887496</span>

                                            </div>
                                        </div>

                                    </div>
                                    <div style="padding-left: 1rem; padding-right: 1rem ; ">
                                        <div class="row">
                                            <div class="col-md-3 text-end mt-2 row-col-with">
                                                <p class="text-end" style="color: #019aa2;  font-size: 12px;">تاريخ
                                                    انتهاء الصفقة</p>
                                                <i class='far fa-calendar-alt' style="color: #37D337;"></i>
                                                <span class="date-icon"
                                                   >
                                                    2022-05-22 </span>
                                                <span class="time-icon"
                                                   >
                                                    <i class='far fa-clock' style="color: #37D337;"></i> 12:00</span>

                                            </div>
                                            <div class="col-md-2 row-col-with view" style="margin-top: 43px;">
                                                <span style="color: #019aa2;  font-size: 12px; padding-right: 5px;">
                                                    2500 <i class='far fa-eye' style="color: #37D337;"></i></span>

                                            </div>
                                            <div class="col-md-2 mt-3">
                                                <h6 class="text-center" style="color: #019aa2;  font-size: 12px;">
                                                    المشاركين</h6>

                                                <span style="color:#019aa2;  font-size: 20px; padding-right: 2px;"> 40
                                                </span>
                                                <i class='far fa-file-alt	' style="color: #019aa2;     font-size: 25px;
"></i>

                                            </div>
                                            <div class="col-md-2 mt-3">

                                                <h6 class="text-center" style="color: #019aa2;  font-size: 12px;">تأمين
                                                    المشاركة</h6>

                                                <span style="color:#d4a259;  font-size: 20px; padding-right: 2px;"> 500
                                                    ريال </span>

                                            </div>

                                            <div class="col-md-3">
                                                <router-link class="btn btn-logo" to="/deals-auctions-details" style="    border-radius: 16px;
    background-color: #039ca4;
    color: white;
    margin-top: 25px;
    padding: 7px 30px 7px 30px;">شارك بالصفقة</router-link>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="img-square-wrapper " style="     border-right: 1px solid #d8d8d8;
    width: 265px;
    padding-top: 115px;
    height: 280px;
    border-right: 1px solid rgb(216, 216, 216);
">
                                    <h1 style="color: #019aa2;">صفقة </h1>
                                    <!-- <img class="" style="border-radius: 13px 0px 0px 13px;     border-right: 1px solid #d8d8d8;" src="http://via.placeholder.com/300x180" alt="Card image cap"> -->
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="mt-2" style="text-align: -webkit-center;">
                    <div class="col-10 mt-3 text-center">
                        <div class="card"
                            style="border-radius: 14px;    margin-bottom: 40px; box-shadow: 1px 1px 5px 2px #ece9e9;">
                            <div class="card-horizontal" style=" display: flex;
    flex: 1 1 auto; border-radius: 13px 13px 13px 13px; ">

                                <div class="card-body"
                                    style="border-radius: 13px 13px 13px 13px; padding-right: 0px; padding-left: 0px;">
                                    <div
                                        style=" border-bottom: 1px solid #d8d8d8; padding-left: 1rem; padding-right: 1rem ;">
                                        <div class="row text-end">
                                            <div class="col-md-9">
                                                <div class="row text-end">
                                                    <div class="col-md-4">
                                                        <i class='far fa-clock' style="color: #ababab;"></i>
                                                        <span style="color: #ababab;"> التاريخ: </span>
                                                        <span style="color: #ababab;"> 2022/02/22</span>

                                                    </div>
                                                    <div class="col-md-7  author-deals-div">
                                                        <a href="#" class="author-deals">
                                                            <span style="color: #ababab;">مقدم بواسطة : </span> <span
                                                                style="color:#019aa2;">شركة فرسان للمقاولات</span> </a>
                                                    </div>

                                                </div>

                                            </div>
                                            <div class="col-md-3 counter-title" style="padding-right: 20px;">
                                                <span style="color: #019aa2;"> بداية المزاد </span>
                                                <Countdown deadline="2023-12-25 00:00:00" :showLabels="false"
                                                    mainFlipBackgroundColor="#d7a358"
                                                    secondFlipBackgroundColor="#d7a358" countdownSize="1.1rem"
                                                    mainColor="#ffff" />
                                            </div>

                                        </div>

                                        <div class="row text-end mt-3 mb-2">
                                            <div class="col-md-8">
                                                <span style="color: #019aa2;"> مواد حديد بناء للبيع </span>
                                                <p class="mt-2" style="color: rgb(87 83 77);"> مطلوب شركة لتأثيث مبنى
                                                    لحي النهضة حسب المواصفات المرفقة</p>
                                            </div>
                                            <div class="col-md-4 mt-1 lg-counter">

                                                <Countdown deadline="2023-12-25 00:00:00" :showLabels="false"
                                                    mainFlipBackgroundColor="#d7a358"
                                                    secondFlipBackgroundColor="#d7a358" countdownSize="1.1rem"
                                                    mainColor="#ffff" />
                                            </div>

                                        </div>

                                    </div>
                                    <div
                                        style=" border-bottom: 1px solid #d8d8d8; padding-left: 1rem; padding-right: 1rem ;">
                                        <div class="row text-end mt-2">
                                            <div class="col-md-12">
                                                <span style="color: #019aa2;"> النوع : </span>
                                                <span style="color: rgb(87 83 77);"> حديد</span>

                                            </div>
                                            <div class="col-md-8 mt-2">


                                                <span style="color: rgb(87 83 77);     color: rgb(87 83 77);
    font-size: 12px;"><i class='fas fa-map-marker-alt' style="color: #ababab;"></i> العنوان : </span>
                                                <span style="color: rgb(87 83 77);     color: rgb(87 83 77);
    font-size: 12px;"> المملكة العربية السعودية - الرياض - طريق النهضة</span>
                                            </div>
                                            <div class="col-md-4 mt-2 mb-2">
                                                <span style="color: #019aa2;  font-size: 12px;"> الرقم المرجعي : </span>
                                                <span style="color: rgb(87 83 77);  font-size: 12px;"> 25887496</span>

                                            </div>
                                        </div>

                                    </div>
                                    <div style="padding-left: 1rem; padding-right: 1rem ; ">
                                        <div class="row">
                                            <div class="col-md-3 text-end mt-2 row-col-with">
                                                <p class="text-end" style="color: #019aa2;  font-size: 12px;">تاريخ
                                                    انتهاء المزاد</p>
                                                <i class='far fa-calendar-alt' style="color: #37D337;"></i>
                                                <span class="date-icon"
                                                 >
                                                    2022-05-22 </span>
                                                <span class="time-icon"
                                                  >
                                                    <i class='far fa-clock' style="color: #37D337;"></i> 12:00</span>

                                            </div>
                                            <div class="col-md-2 row-col-with view" style="margin-top: 43px;">
                                                <span style="color: #019aa2;  font-size: 12px; padding-right: 5px;">
                                                    2500 <i class='far fa-eye' style="color: #37D337;"></i></span>

                                            </div>
                                            <div class="col-md-2 mt-3">
                                                <h6 class="text-center" style="color: #019aa2;  font-size: 12px;">
                                                    المشاركين</h6>

                                                <span style="color:#019aa2;  font-size: 20px; padding-right: 2px;"> 40
                                                </span>
                                                <i class='far fa-file-alt	' style="color: #019aa2;     font-size: 25px;
"></i>

                                            </div>
                                            <div class="col-md-2 mt-3">

                                                <h6 class="text-center" style="color: #019aa2;  font-size: 12px;">تأمين
                                                    المشاركة</h6>

                                                <span style="color:#d4a259;  font-size: 20px; padding-right: 2px;"> 500
                                                    ريال </span>

                                            </div>

                                            <div class="col-md-3">
                                                <router-link to="/deals-auctions-details" class="btn btn-logo" style="    border-radius: 16px;
    background-color: #039ca4;
    color: white;
    margin-top: 25px;
    padding: 7px 30px 7px 30px;">شارك بالمزاد</router-link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="img-square-wrapper " style="     border-right: 1px solid #d8d8d8;
    width: 265px;
    padding-top: 115px;
    height: 280px;
    border-right: 1px solid rgb(216, 216, 216);
">
                                    <h1 style="color: #019aa2;">مزاد </h1>
                                    <!-- <img class="" style="border-radius: 13px 0px 0px 13px;     border-right: 1px solid #d8d8d8;" src="http://via.placeholder.com/300x180" alt="Card image cap"> -->
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="col-lg-12 col-md-12 mt-5 mb-5">
                    <div class="pagination-area"><a href="#" class="prev page-numbers"><i
                                class="fas fa-angle-double-left"></i></a><a href="#" class="page-numbers">1</a><span
                            class="page-numbers current" aria-current="page">2</span><a href="#"
                            class="page-numbers">3</a><a href="#" class="page-numbers">4</a><a href="#"
                            class="next page-numbers"><i class="fas fa-angle-double-right"></i></a></div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
import {
    defineComponent
} from 'vue';
import {
    Countdown
} from 'vue3-flip-countdown'
export default defineComponent({

    components: {
        Countdown,

    },
})

</script>