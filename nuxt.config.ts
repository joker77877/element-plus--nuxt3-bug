// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"
import { FileSystemIconLoader } from "unplugin-icons/loaders"
import IconsResolver from "unplugin-icons/resolver"
export default defineNuxtConfig({
  app: {
    // head
    head: {
      title: 'Element Plus + Nuxt 3',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'ElementPlus + Nuxt3',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    }
  },

  // css
  css: ['~/assets/scss/index.scss'],
  typescript: {
    strict: true,
    shim: false,
  },

  // build modules
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@element-plus/nuxt',
    '@nuxtjs/color-mode',
    [
      "unplugin-icons/nuxt",
      {
        customCollections: {
          icon: FileSystemIconLoader("assets/icons")
        },
        iconCustomizer(_collection: any, _icon: any, props: any) {
          props.width = "2em"
          props.height = "2em"
        }
      }
    ]
  ],
  // components: false,
  // vueuse
  vueuse: {
    ssrHandlers: true,
  },

  // colorMode
  colorMode: {
    classSuffix: '',
  },

  unocss: {
    uno: true,
    attributify: true,
    icons: {
      scale: 1.2,
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/scss/element/index.scss" as element;`,
        },
      },
    },
    plugins: [ 
    //   Components({
    //   dirs: ["components", "pages/**/components/**"],
    //   dts: true,
    //   resolvers: [
    //     ElementPlusResolver({ importStyle: "sass" }),
    //     IconsResolver({
    //       prefix: false,
    //       customCollections: ["icon"]
    //     })
    //   ]
    // })
  ]
  },
  elementPlus: {
    icon: 'ElIcon',
    importStyle: 'scss',
    themes: ['dark'],
  },
})
