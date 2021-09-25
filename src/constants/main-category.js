import about from '../images/icons/about.png';
import blogs from '../images/icons/blogs.png';
import categories from '../images/icons/categories.png';
import discount_coupons from '../images/icons/discount_coupons.png';
import healthy_foods from '../images/icons/healthy_foods.png';
import search from '../images/icons/search.png';
import { APP_PATHS } from '../constants/app-paths';

const ABOUT = {LABEL: "About", IMAGE_PATH: about, LINK: APP_PATHS.ABOUT};
const BLOGS = {LABEL: "Blogs",  IMAGE_PATH: blogs, LINK: APP_PATHS.BLOGS} ;
const CATEGORIES = {LABEL:"Categories",  IMAGE_PATH: categories, LINK: APP_PATHS.CATEGORIES};
const DISCOUNT_COUPONS = {LABEL:"Discount Coupons",  IMAGE_PATH: discount_coupons, LINK: APP_PATHS.DISCOUNT_COUPONS};
const HEALTHY_FOODS = {LABEL:"Healthy Foods",  IMAGE_PATH: healthy_foods, LINK: APP_PATHS.HEALTHY_FOODS};
const SEARCH = {LABEL: "Search", IMAGE_PATH : search, LINK: APP_PATHS.HOME}

const MAIN_CATEGORIES = {ABOUT, BLOGS, CATEGORIES, DISCOUNT_COUPONS, HEALTHY_FOODS, SEARCH};


export {MAIN_CATEGORIES}