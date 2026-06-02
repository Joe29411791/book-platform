import { reactive } from "vue"
import { maps as initialMaps } from "../data/maps"

export const mapStore = reactive({
  maps: [...initialMaps]
})