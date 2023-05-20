import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import {presetUno, presetAttributify, presetIcons} from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
    plugins:
        [vue(),
        Unocss({
            presets: [
                presetUno(),
                presetAttributify(),
                presetIcons({
                    collections: {
                        // uiw:()=>import('@iconify-json/uiw/icons.json').then(i=>i.default),
                        // carbon:()=>import('@iconify-json/carbon/icons.json').then(i=>i.default)
                    }
                })
            ],
        })],
})
