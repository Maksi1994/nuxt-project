import Vue from 'vue';
import Search from '~/components/ui-elements/search.vue';
import DateSelector from '~/components/ui-elements/date-selector.vue';
import PopularitySelector from '~/components/ui-elements/popularity-selector.vue';
import Rating from '~/components/ui-elements/rating.vue';
import FavoriteButton from '~/components/ui-elements/favorite-button.vue';
import ViewCount from '~/components/ui-elements/view-count.vue';
import ViewCountSelector from '~/components/ui-elements/view-count-selector.vue';


// UI ELEMENTS

Vue.component('date-selector', DateSelector);
Vue.component('popularity-selector', PopularitySelector);
Vue.component('view-count-selector', ViewCountSelector);
Vue.component('favorite-btn', FavoriteButton);
Vue.component('view-count', ViewCount);
Vue.component('search', Search);
Vue.component('rating', Rating);

