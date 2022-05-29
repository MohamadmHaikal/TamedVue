<template>
    <div :class="['navbar-area', {'is-sticky': isSticky}]">
        <div class="luvion-nav">
            <div class="container contain" >
                <nav class="navbar navbar-expand-md navbar-light">
                    <router-link class="navbar-brand" to="/">
                        <img src="../../assets/images/logo2.e73a83f9.png" alt="image" style="width: 120px;">
                        <img src="../../assets/images/logo2.e73a83f9.png" alt="image" style="width: 120px;">
                    </router-link>

                    <div 
                        class="navbar-toggler"
                        @click="active = !active" :aria-pressed="active ? 'true' : 'false'"
                        v-bind:class="{ 'active': button_active_state }"
                        v-on:click="button_active_state = !button_active_state"
                    >
                        <span class="icon-bar top-bar"></span>
                        <span class="icon-bar middle-bar"></span>
                        <span class="icon-bar bottom-bar"></span>
                    </div>

                    <b-collapse class="collapse navbar-collapse" :class="{ show: active }" is-nav>
                        <ul class="navbar-nav " style="padding-top: 5px;">
                            <li class="nav-item">
                                <router-link to="/about-us" class="nav-link">
                                    عن تعميد
                                </router-link>
                               
                            </li>
                            <li class="nav-item">
                                <router-link to="/projects" class="nav-link">
                                    المشاريع
                                </router-link >
                            </li>
                            <li class="nav-item">
                               <router-link to="/DealsAuctions" class="nav-link">
                                    الصفقات / المزادات
                                </router-link>
                              
                            </li>
 
                            <li class="nav-item">
                                <a href="javascript:void(0);" class="nav-link">
                                    تمويل العقود
                                </a>

                                <!-- <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <router-link to="/about-us" class="nav-link">
                                            About Us
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link">
                                            Features <i class="fas fa-chevron-down"></i>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li class="nav-item">
                                                <router-link to="/features-1" class="nav-link">
                                                    Features Style One
                                                </router-link>
                                            </li>
                                            <li class="nav-item">
                                                <router-link to="/features-2" class="nav-link">
                                                    Features Style Two
                                                </router-link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/team" class="nav-link">
                                            Team
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/pricing" class="nav-link">
                                            Pricing
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/login" class="nav-link">
                                            Login
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/register" class="nav-link">
                                            Register
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/faq" class="nav-link">
                                            FAQ
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/error" class="nav-link">
                                            Error Page
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/terms-condition" class="nav-link">
                                            Terms & Conditions
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/privacy-policy" class="nav-link">
                                            Privacy Policy
                                        </router-link>
                                    </li>
                                </ul> -->
                            </li>
                            <li class="nav-item">
                                <a href="javascript:void(0);" class="nav-link">
                                    المركز الإعلامي
                                   
                                </a>
                            </li>
                            <li class="nav-item">
                                   <router-link to="/contact" class="nav-link">
                                    نماذج العقود
                                </router-link>
                               
                            </li>
                            <li class="nav-item">
                                <a href="javascript:void(0);" class="nav-link">
                                    الإتصال بنا
                                </a>
                            </li>
                             <li class="test ">
                                <a href="javascript:void(0);" class="nav-link" style="color: white;">
                                    نسخة تجريبية
                                </a>
                            </li>
                              <li class="nav-item" style=" padding-top: 4px; position: absolute; right: 84%;">
                                <a href="javascript:void(0);" class="nav-link lang-btn" style="    box-shadow: rgb(240 240 240) 0px 2px 7px 4px; padding: 3px;">
                                    EN
                                </a>
                            </li>
                              <li class="nav-item" style="padding-top: 0px; position: absolute; right: 88%;">
                                <a href="https://login.tamedksa.com/" class="btn btn-login"
                                    style="    border-radius: 25px;
                                            background-color: #f2a23b;
                                            color: white;
                                            font-weight: 400;
                                            text-align: center;
                                            text-decoration: none;
                                            vertical-align: middle;
                                            width:140%;
                                            height: 35px;
                                            padding-right: 1px;
                                            margin-right: 10px;
                                            cursor: pointer;
                                            -moz-user-select: none;
                                            -ms-user-select: none;
                                            user-select: none;
                                            border: 1px solid transparent;
                                        
                                            font-size: 1rem;
                                            transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;">
                                    تسجيل الدخول

                                </a>
                            </li>
                        </ul>
                    </b-collapse>
                    <div class="others-options">
                        <a  href="https://login.tamedksa.com/" class="login-btn">
                            <i class="flaticon-user"></i> تسجيل الدخول
                        </a>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Navbar',
        data(){
            return {
                isSticky: false,
                active: false,
                button_active_state: false
            }
        },

        mounted(){
            const that = this
            window.addEventListener('scroll', () => {
                let scrollPos = window.scrollY
                if(scrollPos >= 100){
                    that.isSticky = true
                } else {
                    that.isSticky = false
                }
            })
        }
    }
</script>