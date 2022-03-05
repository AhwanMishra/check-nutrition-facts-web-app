/*
    Main Categories
*/

const HOME = "/";
const SEARCH = "/";

const ABOUT = "/about";
const BLOGS = "/blogs";
const CATEGORIES = "/categories";
const DISCOUNT_COUPONS = "/discount-coupons";
const HEALTHY_FOODS = "/healthy-foods";

const SEARCH_RESULTS = "/search";
const PRODUCT_DETAILS = "/product-details";

const MAIN_CATEGORY_PATHS = {HOME, SEARCH, ABOUT, BLOGS, CATEGORIES, DISCOUNT_COUPONS,
HEALTHY_FOODS, SEARCH_RESULTS, PRODUCT_DETAILS};

/*
    Food Main Categories (Query Params)
*/

const FRESH_PRODUCE = 'fresh-produce';
const MEAT_AND_SEAFOOD = 'fresh-meat-and-sea-food';
const DELI = 'deli';
const DAIRY_AND_EGGS = 'dairy-and-eggs';
const BAKERY_AND_BREAD = 'bakery-and-bread';
const FROZEN = 'frozen';
const PANTRY = 'pantry';
const BREAKFAST_AND_CERAL = 'breakfast-and-ceral';
const BAKING = 'baking';
const SNACKS = 'snacks';
const CANDY = 'candy';
const BEVERAGES = 'beverages';
const COFFEE = 'coffee';
const ALCOHOL = 'alcohol';


const FOOD_CATEGORY_PATHS = {
    FRESH_PRODUCE,
    MEAT_AND_SEAFOOD,
    DELI,
    DAIRY_AND_EGGS,
    BAKERY_AND_BREAD,
    FROZEN,
    PANTRY,
    BREAKFAST_AND_CERAL,
    BAKING,
    SNACKS,
    CANDY,
    BEVERAGES,
    COFFEE,
    ALCOHOL
};


/*
    Food Sub Categories (Query Params)
*/


// FRESH_PRODUCE_..............................................................
const FRESH_FRUIT = 'fresh-fruits';
const FRESH_VEGETABLES = 'fresh-vegetables';
const ORGANIC_PRODUCE = 'organic-produce';
const FRESH_PACKAGED_SALADS_DRESSINGS_AND_DIPS = 'fresh-packaged-salads-dressings-dips';
const FRESH_HERBS = 'fresh-herbs';
const PLANT_BASED_PROTEIN_AND_TOFU = 'plant-based-protein-tofu';

// MEAT_AND_SEAFOOD_.............................................................. 
const KEEP_CALM_AND_GRILL_ON = 'keep-calm-and-grill-on';
const BEEF_AND_LAMB = 'beef-lamb';
const CHICKEN = 'chicken';
const PORK = 'pork';
// const SEAFOOD = 'seafood';
const SUSTAINABLE_SEAFOOD = 'sustainable-seafood';
const ORGANIC_AND_PLANT_BASED = 'organic-plant-based';
const TURKEY = 'turkey';
const BACON_HOT_DOGS_AND_SAUSAGES = 'bacon-hot-dogs-sausages';

// DELI_.............................................................. 
const DELI_MEAT_AND_CHEESE = 'deli-meat-cheese';
const PREPARED_MEALS_AND_SIDES = 'prepared-meals-sides';
const ROTISSERIE_AND_PULLED_CHICKEN = 'rotisserie-pulled-chicken';
const BACON_HOT_DOGS_AND_SAUSAGE = 'bacon-hot-dogs-sausage';
const SNACKS_AND_FRESH_SANDWICHES = 'snacks-fresh-sandwiches';
const FRESH_PREPARED_SOUPS_AND_SALADS = 'fresh-prepared-soups-salads';
const HUMMUS_DIPS_AND_SALSA = 'hummus-dips-salsa';
const SPECIALTY_CHEESE_AND_CHARCUTERIE = 'specialty-cheese-charcuterie';

// DAIRY_AND_EGGS_..............................................................
const CHEESE = 'cheese';
const MILK = 'milk';
const CREAM_AND_CREAMERS = 'cream-creamers';
const YOGURT = 'yogurt';
const EGGS = 'eggs';
const BUTTER_AND_MARGARINE = 'butter-margarine';
const SOUR_CREAM_AND_CHILLED_DIPS = 'sour-cream-chilled-dips';
const BISCUITS_COOKIES_DOUGHS_AND_CRUSTS = 'biscuits-cookies-doughs-crusts';
const PUDDING_AND_GELATIN = 'pudding-gelatin';

// BAKERY_AND_BREAD_..............................................................
const SLICED_BREAD = 'sliced-bread';
const FRESH_BAKERY_BREADS = 'fresh-bakery-breads';
const ROLLS_AND_BUNS = 'rolls-buns';
const TORTILLAS = 'tortillas';
const BREAKFAST_BREADS = 'breakfast-breads';
const DONUTS_AND_BREAKFAST_PASTRIES = 'donuts-breakfast-pastries';
const CAKES_AND_CUPCAKES = 'cakes-cupcakes';
const PIES = 'pies';
const COOKIES_AND_BROWNIES = 'cookies-brownies';
const SWEET_TREATS = 'sweet-treats';
const CUSTOM_CAKES = 'from-our-bakery';

// FROZEN_..............................................................
const FROZEN_BREAKFAST = 'frozen-breakfast-food';
const FROZEN_POTATOES = 'frozen-potatoes';
const FROZEN_FRUITS_AND_VEGETABLES = 'frozen-fruits-vegetables';
const FROZEN_MEAT_SEAFOOD_AND_VEGETARIAN = 'frozen-meat-seafood-vegetarian';
const FROZEN_MEALS_AND_SNACKS = 'frozen-meals-snacks';
const FROZEN_PIZZAS_PASTA_AND_BREADS = 'frozen-pizza-pasta-breads';
const FROZEN_BEVERAGES_AND_ICE = 'frozen-beverages-ice';
const FROZEN_DESSERTS = 'frozen-desserts';

// PANTRY_.............................................................. 
const CANNED_GOODS = 'canned-goods';
const CONDIMENTS = 'condiments';
const PASTA_AND_PIZZA = 'pasta-pizza';
const HERBS_SPICES_AND_SEASONING_MIXES = 'herbs-spices-seasoning-mixes';
const BOXED_MEALS_AND_SIDE_DISHES = 'boxed-meals-side-dishes';
const SOUP = 'soup';
const RICE_GRAINS_AND_DRIED_BEANS = 'rice-grains-dried-beans';
const INTERNATIONAL_FOODS = 'international-foods';
const COOKING_OILS_AND_VINEGAR = 'cooking-oils-vinegar';
const BULK_FOOD = 'bulk-food';

// BREAKFAST_AND_CERAL_.............................................................. 
const CEREAL_AND_GRANOLA = 'cereal-granola';
const PANCAKES_AND_WAFFLES = 'pancakes-waffles';
const OATMEAL_AND_GRITS = 'oatmeal-grits';
const GRAB_AND_GO_BARS_AND_TOASTER_PASTRIES = 'grab-go-bars-toaster-pastries';

// BAKING__..............................................................
const BAKING_INGREDIENTS = 'baking-ingredients';
const EASY_TO_MAKE = 'easy-to-make';

// SNACKS_..............................................................
const CHIPS = 'chips';
const POPCORN_AND_PRETZELS = 'popcorn';
const SALSA_AND_DIPS = 'dips-spreads';
const CRACKERS = 'crackers';
const COOKIES = 'cookies';
const FRUIT_SNACKS = 'fruit-snacks';
const NUTS_AND_DRIED_FRUITS = 'nuts-trail-mix-seeds';
//const PUDDING_AND_GELATIN = 'pudding-gelatin'; (Already there is diary & eggs)
const SNACK_MEATS_AND_JERKY = 'snack-meats';


// CANDY_..............................................................
const HALLOWEEN_CANDY = 'halloween-candy';
const CHOCOLATE = 'chocolate';
const GUMMY_AND_CHEWY_CANDY = 'gummy-chewy-candy';
const HARD_CANDY_AND_LOLLIPOPS = 'hard-candy-lollipops';
const MULTIPACKS_AND_BAGS = 'multipacks-bags';
const FRUIT_FLAVORED_AND_SOUR_CANDY = 'fruit-flavored-sour-candy';
const BRITTLE_CARAMEL_AND_TOFFEE = 'brittle-caramel-toffee';
const SUGAR_FREE_CANDY = 'sugar-free-candy';
const GUM = 'gum';
const MINTS = 'mints';
const ON_THE_GO = 'on-the-go';


// BEVERAGES_..............................................................
const WATER = 'water';
const SOFT_DRINKS = 'soda-pop';
const FRUIT_JUICE = 'juices';
const SPORTS_DRINKS = 'sports-drinks';
const ENERGY_DRINKS = 'energy-drinks';
const TEA = 'tea';
const HOT_CHOCOLATE_AND_COCOA = 'hot-cocoa';
const DRINK_MIXES_AND_WATER_ENHANCERS = 'water-enhancers';
const NON_ALCOHOLIC_MIXERS = 'mixers';
const FRESH_JUICE_AND_CHILLED_BEVERAGES = 'fresh-juice-chilled-beverages';
// const ICE = 'ice';
const COCKTAILS_AND_MIXES = 'cocktails-mixers';

// COFFEE_..............................................................
const GROUND_COFFEE = 'ground-coffee';
const COFFEE_PODS = 'single-serve-cups-pods';
const WHOLE_BEAN_COFFEE = 'whole-bean-coffee';
const INSTANT_COFFEE = 'instant-coffee';
const ROAST_TO_ORDER_COFFEE = 'coffee-roast-to-order';


// ALCOHOL_..............................................................
const NEW_AND_SEASONAL_ALCOHOL = 'new-seasonal-alcohol';
const HARD_SELTZERS = 'hard-seltzers';
const DOMESTIC_BEER = 'domestic-beer';
const IMPORT_BEERS = 'import-beers';
const CRAFT_BEER = 'craft-beer';
const FLAVORED_AND_SPECIALTY_BEVERAGES = 'flavored-specialty-beverages';
const RED_WINE = 'red-wine';
const WHITE_WINE = 'white-wine';
const ROSE_AND_BLUSH_WINE = 'rose-blush-wine';
const CHAMPAGNE_AND_SPARKLING_WINE = 'champagne-sparkling-wine';
// const LIQUOR = 'liquor';
const COCKTAILS_AND_MIXERS = 'cocktails-mixers';
const LIGHT_AND_LOW_CALORIE_ALCOHOL = 'light-low-calorie-alcohol';
const NON_ALCOHOLIC_BEER_AND_WINE = 'non-alcoholic-beer-wine';


const FOOD_SUB_CATEGORY_PATHS = {
    FRESH_FRUIT,
    FRESH_VEGETABLES,
    ORGANIC_PRODUCE,
    FRESH_PACKAGED_SALADS_DRESSINGS_AND_DIPS,
    FRESH_HERBS,
    PLANT_BASED_PROTEIN_AND_TOFU,
    KEEP_CALM_AND_GRILL_ON,
    BEEF_AND_LAMB,
    CHICKEN,
    PORK,
    // SEAFOOD,
    SUSTAINABLE_SEAFOOD,
    ORGANIC_AND_PLANT_BASED,
    TURKEY,
    BACON_HOT_DOGS_AND_SAUSAGE,
    BACON_HOT_DOGS_AND_SAUSAGES,
    DELI_MEAT_AND_CHEESE,
    PREPARED_MEALS_AND_SIDES,
    ROTISSERIE_AND_PULLED_CHICKEN,
    SNACKS_AND_FRESH_SANDWICHES,
    FRESH_PREPARED_SOUPS_AND_SALADS,
    HUMMUS_DIPS_AND_SALSA,
    SPECIALTY_CHEESE_AND_CHARCUTERIE,
    CHEESE,
    MILK,
    CREAM_AND_CREAMERS,
    YOGURT,
    EGGS,
    BUTTER_AND_MARGARINE,
    SOUR_CREAM_AND_CHILLED_DIPS,
    BISCUITS_COOKIES_DOUGHS_AND_CRUSTS,
    PUDDING_AND_GELATIN,
    SLICED_BREAD,
    FRESH_BAKERY_BREADS,
    ROLLS_AND_BUNS,
    TORTILLAS,
    BREAKFAST_BREADS,
    DONUTS_AND_BREAKFAST_PASTRIES,
    CAKES_AND_CUPCAKES,
    PIES,
    COOKIES_AND_BROWNIES,
    SWEET_TREATS,
    CUSTOM_CAKES,
    FROZEN_BREAKFAST,
    FROZEN_POTATOES,
    FROZEN_FRUITS_AND_VEGETABLES,
    FROZEN_MEAT_SEAFOOD_AND_VEGETARIAN,
    FROZEN_MEALS_AND_SNACKS,
    FROZEN_PIZZAS_PASTA_AND_BREADS,
    FROZEN_BEVERAGES_AND_ICE,
    FROZEN_DESSERTS,
    CANNED_GOODS,
    CONDIMENTS,
    PASTA_AND_PIZZA,
    HERBS_SPICES_AND_SEASONING_MIXES,
    BOXED_MEALS_AND_SIDE_DISHES,
    SOUP,
    RICE_GRAINS_AND_DRIED_BEANS,
    INTERNATIONAL_FOODS,
    COOKING_OILS_AND_VINEGAR,
    BULK_FOOD,
    CEREAL_AND_GRANOLA,
    PANCAKES_AND_WAFFLES,
    OATMEAL_AND_GRITS,
    GRAB_AND_GO_BARS_AND_TOASTER_PASTRIES,
    BAKING_INGREDIENTS,
    EASY_TO_MAKE,
    CHIPS,
    POPCORN_AND_PRETZELS,
    SALSA_AND_DIPS,
    CRACKERS,
    COOKIES,
    FRUIT_SNACKS,
    NUTS_AND_DRIED_FRUITS,
    SNACK_MEATS_AND_JERKY,
    HALLOWEEN_CANDY,
    CHOCOLATE,
    GUMMY_AND_CHEWY_CANDY,
    HARD_CANDY_AND_LOLLIPOPS,
    MULTIPACKS_AND_BAGS,
    FRUIT_FLAVORED_AND_SOUR_CANDY,
    BRITTLE_CARAMEL_AND_TOFFEE,
    SUGAR_FREE_CANDY,
    GUM,
    MINTS,
    ON_THE_GO,
    WATER,
    SOFT_DRINKS,
    FRUIT_JUICE,
    SPORTS_DRINKS,
    ENERGY_DRINKS,
    TEA,
    HOT_CHOCOLATE_AND_COCOA,
    DRINK_MIXES_AND_WATER_ENHANCERS,
    NON_ALCOHOLIC_MIXERS,
    FRESH_JUICE_AND_CHILLED_BEVERAGES,
    // ICE,
    COCKTAILS_AND_MIXES,
    GROUND_COFFEE,
    COFFEE_PODS,
    WHOLE_BEAN_COFFEE,
    INSTANT_COFFEE,
    ROAST_TO_ORDER_COFFEE,
    NEW_AND_SEASONAL_ALCOHOL,
    HARD_SELTZERS,
    DOMESTIC_BEER,
    IMPORT_BEERS,
    CRAFT_BEER,
    FLAVORED_AND_SPECIALTY_BEVERAGES,
    RED_WINE,
    WHITE_WINE,
    ROSE_AND_BLUSH_WINE,
    CHAMPAGNE_AND_SPARKLING_WINE,
    // LIQUOR,
    COCKTAILS_AND_MIXERS,
    LIGHT_AND_LOW_CALORIE_ALCOHOL,
    NON_ALCOHOLIC_BEER_AND_WINE
};

export { MAIN_CATEGORY_PATHS, FOOD_CATEGORY_PATHS, FOOD_SUB_CATEGORY_PATHS};
