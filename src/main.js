import ElInput from './components/input.vue'

const install = ElInput.install = function (Vue, options = {}) {
  if (install.installed) return
  if (!options.$scoped) {
    Vue.component(ElInput.name, ElInput)
  }
}

export default ElInput
