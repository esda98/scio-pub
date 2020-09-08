import Vue from "vue";
// eslint-disable-next-line
//@ts-ignore
import Vuetify, {colors} from "vuetify/lib";

Vue.use(Vuetify);


export default new Vuetify({
  theme: {
    themes: {
      dark: {
        primary: colors.deepPurple.darken2,
        navDrawer: colors.deepPurple.darken3
      },
      light: {
        primary: colors.blue.darken2,
        navDrawer: colors.blue.darken3
      }
    }
  }
});
