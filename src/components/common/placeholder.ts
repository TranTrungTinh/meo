
import { defineComponent, h, Transition } from 'vue'
// import { LanguageKey } from '/@/language'
// import Empty from './empty.vue'
// import Spin from './spin.vue'

export enum Events {
  AfterEnter = 'after-enter'
}

/**
 * @example
 *  <placeholder :loading="false" :data="data.length" :i18n-key="LanguageKey.XXX">
 *    <component />
 *  </placeholder>
 * @example
 *  <placeholder :loading="false" :data="data.length" placeholder="empty">
 *    <component />
 *  </placeholder>
 * @example
 *  <placeholder :loading="true" :data="data.length">
 *    <template #loading> skeleton </template>
 *    <template #placeholder> placeholder </template>
 *    <template #default> <component /> </template>
 *  </placeholder>
 */
export default defineComponent({
  name: 'Placeholder',
  props: {
    data: {
      type: [Array, Object, Boolean, Number],
      default: undefined
    },
    transition: {
      type: Boolean,
      default: true
    },
    transitionName: {
      type: String,
      default: 'module'
    },
    placeholder: String,
    loading: Boolean
  },
  emits: [Events.AfterEnter],
  setup(props, context) {
    return () => {
      const { data, loading, transition, transitionName } = props
      const isEmptyData =
        data !== undefined && ((Array.isArray(data) && !(data as any).length) || !data)

      const getPlaceholderView = () => {
        return context.slots.placeholder?.()
      }

      const getDataView = () => {
        return isEmptyData ? getPlaceholderView() : context.slots.default?.()
      }

      const getLoadingView = () => {
        return context.slots.loading?.()
      }

      const getView = () => {
        return loading ? getLoadingView() : getDataView()
      }

      if (transition) {
        return h(
          Transition,
          {
            name: transitionName,
            mode: 'out-in',
            onAfterEnter(...args) {
              context.emit(Events.AfterEnter, ...args)
            }
          },
          () => getView()
        )
      }

      return getView()
    }
  }
})
