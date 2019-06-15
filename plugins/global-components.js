import Vue from 'vue';
import BlogersList from '../components/blogers/list';
import BlogerPreview from '../components/blogers/preview';
import BlogerOne from '../components/blogers/one';
import BlogerEditor from '../components/blogers/edit';

const components = {
    BlogersList,
    BlogerPreview,
    BlogerOne,
    BlogerEditor
};

Object.entries(components).forEach(([name, component]) => {
    Vue.component(name, component)
});
