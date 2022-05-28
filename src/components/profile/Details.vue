<template>
    <div>
        <div class="about-area pb-70">
            <div class="containp  container">

                <div style="text-align: -webkit-center;">
                    <div class="col-md-10 col-sm-12 mt-3 text-center">

                        <div class="row" style="    padding-right: 0px; padding-left: 0px;">
                            <div class="col-md-8  col-sm-12 text-end mt-3">

                                <div class="row">

                                    <div class="col-md-12 mt-4">
                                        <div class="tab">
                                            <button id="buttonlinks" class="tablinks profile"
                                                @click="openCity($event, 'London')">نبذة عن المنشآة
                                            </button>
                                            <button class="tablinks profile" @click="openCity($event, 'Paris')">بروفايل
                                                المنشآة</button>
                                            <button class="tablinks profile" @click="openCity($event, 'Tokyo')">
                                                المشاريع</button>
                                            <button class="tablinks profile" @click="openCity($event, 'Tokyo')">
                                                تعليقات</button>
                                        </div>

                                        <div id="London" class="tabcontent">
                                            <div
                                                style="    border-bottom: 1px solid rgb(238, 239, 241); padding-bottom: 40px;">

                                                <small
                                                    style="position:relative;top:26px;right:40px;background-color:#ffffff;padding:0px 10px 0px 10px;">نبذة
                                                    عن المنشآة</small>
                                                <div class="mt-3"
                                                    style="border:1px solid #019aa2;border-radius:25px;padding:20px;">
                                                    <span> فرسان مؤسسة سعودية تأسست بالرياض عام 1431 هجري وتعنى بنشاطات
                                                        متنوعة ومنها التشيد والبناء وتنفيذ اعمال البراندات وبناء
                                                        المستودعات الحديثة وتجهيز مكاتب الشركات بجميع مستوياتها الفاخرة
                                                        والمتوسطة</span>
                                                </div>
                                            </div>
                                            <h5 class="mt-4">معلومات إضافية</h5>
                                            <div
                                                style=" border-bottom: 1px solid rgb(238, 239, 241); padding-bottom: 50px; ">

                                                <div class="mt-3"
                                                    style="    border:1px solid #c2c2c2;border-radius:15px;padding:10px;">

                                                    <div class="row">
                                                        <div class="col-md-3">
                                                            <img src="../../assets/images/customer.png" alt=""
                                                                style="    width: 22%;">
                                                            <span
                                                                style="color:#c7c7c7 ;font-size: 10px;font-weight: 500; padding: 0px 5px 0px 0px;">عدد
                                                                العملاء:</span>
                                                            <span style=" color: #039ca4;   font-size: 10px;"> +500 عميل
                                                            </span>
                                                        </div>
                                                        <div class="col-md-3">
                                                            <img src="../../assets/images/projects.png" alt=""
                                                                style="    width: 18%;">
                                                            <span
                                                                style="color:#c7c7c7 ;font-size: 10px;font-weight: 500; padding: 0px 5px 0px 0px;">عدد
                                                                المشاريع:</span>
                                                            <span style=" color: #039ca4;   font-size: 10px;"> 200 مشروع
                                                            </span>
                                                        </div>
                                                        <div class="col-md-3">
                                                            <img src="../../assets/images/activity.png" alt=""
                                                                style="    width: 22%;">
                                                            <span
                                                                style="color:#c7c7c7 ;font-size: 8px;font-weight: 500; padding: 0px 5px 0px 0px;">النشاط
                                                                الرئيسي:</span>
                                                            <span style=" color: #039ca4;   font-size: 10px;"> تشيد
                                                                وبناء</span>
                                                        </div>
                                                        <div class="col-md-3">
                                                            <img src="../../assets/images/tasnef.png" alt=""
                                                                style="    width: 22%;">
                                                            <span
                                                                style="color:#c7c7c7 ;font-size: 10px;font-weight: 500; padding: 0px 5px 0px 0px;">فئة
                                                                التصنيف:</span>
                                                            <span style=" color: #039ca4;   font-size: 10px;"> تصنيف أول
                                                            </span>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div class="row mt-4">
                                                <div class="col-md-6 text-end">
                                                    <h5 class="mb-4">العنوان الرئيسي</h5>
                                                    <i class="fas fa-map-marker-alt"
                                                        style="color: rgb(1, 154, 162); font-size: 20px; "></i>
                                                    <span
                                                        style="color:#7ba9a7; padding-right: 8px;    font-size: small;">العنوان
                                                        الرئيسي: </span>
                                                    <span style="color:#858585 ;    font-size: small;"> المملكة العربية
                                                        السعودية الرياض </span>
                                                </div>
                                                <div class="col-md-6 text-center">
                                                    <h5 class="mb-4" style="color: #019fa8;">نسبة إنجاز العمل</h5>
                                                    <p style="color: #595959;">تقدر نسبة إنجاز عمل منشآة بحسب العقود
                                                        المبرمة بين الطرفين</p>
                                                    <div class="circle-wrap">
                                                        <div class="circle">
                                                            <div class="mask full">
                                                                <div class="fill"></div>
                                                            </div>
                                                            <div class="mask half">
                                                                <div class="fill"></div>
                                                            </div>
                                                            <div class="inside-circle"> 75% </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <div id="Paris" class="tabcontent">
                                            <h3 style="color:#000000">تحميل ملفات الصفقة</h3>
                                            <table
                                                style=" border-collapse: separate;border-spacing: 0;min-width: 350px;">

                                                <tr>
                                                    <td
                                                        style=" border-right: 1px solid #ccc; border-top: 1px solid #ccc; border-top-right-radius: 20px;">
                                                        <div style="padding: 30px;"> <img
                                                                src="../../assets/images/pdf.png" alt=""
                                                                style=" width: 30%;"> <span
                                                                style=" color:#019aa2;  padding-right: 2px;  font-size: 20px;">
                                                                <a href="javascript:void(0);"
                                                                    style=" color:#019aa2;">تحميل</a></span>
                                                        </div>
                                                    </td>
                                                    <td
                                                        style=" border-top: 1px solid #ccc;    border-left: 1px solid #ccc; border-right: 1px solid #ccc; border-top-left-radius: 20px;">
                                                        <div style="padding: 30px;"><img
                                                                src="../../assets/images/3d.png" alt=""
                                                                style=" width: 30%;"> <span
                                                                style=" color:#019aa2;  padding-right: 2px;  font-size: 20px;">
                                                                <a href="javascript:void(0);"
                                                                    style=" color:#019aa2;">تحميل</a></span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td
                                                        style="border-right: 1px solid #ccc;     border-bottom: 1px solid #ccc;   border-top: 1px solid #ccc; border-bottom-right-radius: 20px;">
                                                        <div style="padding: 30px;"><img
                                                                src="../../assets/images/Excel.png" alt=""
                                                                style=" width: 30%;"> <span
                                                                style=" color:#019aa2; padding-right: 2px;   font-size: 20px;">
                                                                <a href="javascript:void(0);"
                                                                    style=" color:#019aa2;">تحميل</a></span>
                                                        </div>
                                                    </td>
                                                    <td style="border: 1px solid #ccc;border-bottom-left-radius: 20px;">
                                                        <div style="padding: 30px;"><img
                                                                src="../../assets/images/autoca.png" alt=""
                                                                style=" width: 30%;"> <span
                                                                style=" color:#019aa2;   padding-right: 2px; font-size: 20px;">
                                                                <a href="javascript:void(0);"
                                                                    style=" color:#019aa2;">تحميل</a></span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>

                                        <div id="Tokyo" class="tabcontent">
                                            <h3 style="color:#000000">شروط شراء الصفقة</h3>
                                            <div class="mt-5"
                                                style="    border: 1px solid #ccc;border-radius: 25px;padding: 20px;">
                                                <div class="row mt-4">
                                                    <div class="col-md-4 col-sm-3  text-center">
                                                        <img src="../../assets/images/amala.png" alt=""
                                                            style="width:45px;">
                                                        <br>
                                                        <small style="color:#333333 ;">العمالة</small>
                                                        <br>
                                                        <small style="color:#019aa2 ;">على الكفالة او عقد اجير</small>
                                                    </div>

                                                    <div class="col-md-4 text-center">
                                                        <img src="../../assets/images/tasnef.png" alt=""
                                                            style="width:40px;">
                                                        <br>
                                                        <small style="color:#333333 ;">فئة التصنيف</small>
                                                        <br>
                                                        <small style="color:#019aa2 ;">لايهم</small>
                                                    </div>
                                                    <div class="col-md-4 text-center">
                                                        <img src="../../assets/images/daman.png" alt=""
                                                            style="width:50px;">
                                                        <br>
                                                        <small style="color:#333333 ;">ضمان بنكي</small>
                                                        <br>
                                                        <small style="color:#019aa2 ;">لايهم</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <small
                                                style="position: relative; top: 26px;right: 40px; background-color: #ffffff;padding: 0px 10px 0px 10px;">الاوراق
                                                المطلوبة</small>
                                            <div class="mt-3"
                                                style="border: 1px solid #ccc;border-radius: 25px;padding: 20px;">
                                                <div class="row">
                                                    <div class="col-md-4 text-center">
                                                        <a href="javascript:void(0);" class="btn paper"> صورة السجل
                                                            التجاري</a>
                                                    </div>

                                                    <div class="col-md-4 text-center">
                                                        <a href="javascript:void(0);" class="btn paper">الدخل
                                                            والزكاة</a>
                                                    </div>
                                                    <div class="col-md-4 text-center">
                                                        <a href="javascript:void(0);" class="btn paper"> ضريبة القيمة
                                                            المضافة </a>
                                                    </div>
                                                    <div class="col-md-4 text-center">
                                                        <a href="javascript:void(0);" class="btn paper"> شهادة تصنيف
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div class="col-md-4 col-sm-12 price-card"
                                style="border-right: 1px solid rgb(238, 239, 241);">
                                <a href="/SubmitQuotes" class="btn btn-logo"
                                    style="margin-left: 20px;border-radius: 10px; background-color: rgb(3, 156, 164);  color: white; margin-top: 25px; padding: 7px 30px;">الحصول
                                    على عرض سعر لمشروع</a>
                                <div
                                    style="width: 84%; height: 310px; margin-top: 5%; border-radius: 12px; margin-bottom: 5%;  box-shadow: rgb(236 233 233) 1px 1px 5px 2px;">

                                    <div style="border-bottom: 1px solid #eeeff1 ;">
                                        <h5
                                            style="padding-top: 8%; color: #f4a23e; text-align: center; padding-bottom: 10px;">
                                            عدد العقود المبرمة
                                        </h5>


                                    </div>
                                    <div
                                        style="text-align: right;  border-bottom: 1px solid #eeeff1 ;  padding-top: 15px;padding-bottom: 15px;">
                                        <span
                                            style=" color:#5f5f5f ;  text-align: right; padding-right: 5%;padding-top: 10%;font-weight: 500; font-size: 13px;">
                                            تحسب عدد العقود المبرمة من خلال المنصة </span>
                                        <span
                                            style="  color:#5f5f5f ; text-align: right; padding-right: 5%;padding-top: 10%;font-weight: 500; font-size: 13px;">
                                            من تاريخ تسجيل المنشآة</span>
                                        <br>
                                        <span
                                            style="  text-align: right; padding-right: 5%;padding-top: 10%;font-weight: 500; font-size: 13px; color:#5f5f5f ;">
                                            تاريخ التسجيل 05/05/2022</span>

                                    </div>
                                    <p class="text-center mt-3"
                                        style=" font-size: 350%;font-weight: bold; color:#039ca4;">24</p>
                                    <p
                                        style=" position: relative;bottom: 10%; font-size: 25px;left: 44%; color:#039ca4;">
                                        عقد</p>
                                </div>
                                <a href="/SubmitQuotes" class="btn btn-logo"
                                    style="margin-left:46px;border-radius:10px;background-color:white; border: 1px solid  rgb(3, 156, 164); color:rgb(3, 156, 164);margin-top:25px;padding:7px 30px;">تقديم
                                    بلاغ على المنشآة</a>
                                <br>

                                <br><br>
                                <a href="javascript:void(0);"
                                    style="color: #039ca4; margin-left: 8px; border-radius: 12px; padding-top: 30px;  padding-left: 17px; padding-bottom: 15px; box-shadow: rgb(236 233 233) 1px 1px 5px 2px; "><i
                                        class="far fa-comment-alt mb-2" style="font-size:25px;color:#039ca4;"></i><small
                                        style="    position: relative;top: 15px;left: 65px;">محادثة مع
                                        المنشآة</small></a>
                                <br><br><br><br>
                            </div>


                        </div>


                    </div>
                </div>


            </div>
        </div>


    </div>
</template>

<script>

export default {
    methods: {

        openCity(evt, cityName) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active-profile", "");
            }
            document.getElementById(cityName).style.display = "block";

            evt.currentTarget.className += " active-profile";
        },
    },
    mounted: function () {
        var element = document.getElementById("buttonlinks");
        element.classList.add("active-profile");
        document.getElementById('London').style.display = "block";
    }
}


</script>
<style>
/* Style the tab */
.tab {
    overflow: hidden;
    border: 1px solid #ccc;

    border-radius: 25px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 2px;
}

/* Style the buttons inside the tab */



/* Create an active/current tablink class */

/* Style the tab content */
</style>
<style>
table {
    border-collapse: unset;
    width: 100%;
}
.circle-wrap {
  margin: 150px auto;
  width: 150px;
  height: 150px;
  background: #fefcff;
  border-radius: 50%;
  border: 1px solid #cdcbd0;
}

.circle-wrap .circle .mask,
.circle-wrap .circle .fill {
  width: 150px;
  height: 150px;
  position: absolute;
  border-radius: 50%;
}

.circle-wrap .circle .mask {
  clip: rect(0px, 150px, 150px, 75px);
}

.circle-wrap .inside-circle {
  width: 122px;
  height: 122px;
  border-radius: 50%;
  background: #d2eaf1;
  line-height: 120px;
  text-align: center;
  margin-top: 14px;
  margin-left: 14px;
  color: #1e51dc;
  position: absolute;
  z-index: 100;
  font-weight: 700;
  font-size: 2em;
}

/* color animation */

/* 3rd progress bar */
.mask .fill {
  clip: rect(0px, 75px, 150px, 0px);
  background-color: #227ded;
}

.mask.full,
.circle .fill {
  animation: fill ease-in-out 3s;
  transform: rotate(135deg);
}

@keyframes fill{
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(135deg);
  }
}



</style>