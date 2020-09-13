Component({
  data: {
    hasSlots: false
  },
  props: {
    type: 'default',
    size: 'normal',
    icon: '',
    loading: false,
    disabled: false,
    plain: false,
    round: false,
    circle: false,
    icon: '',
    dataset: null,
    customClass: '',
    customStyle: '',
  },
  methods: {
    tap(e) {
      const { disabled, onTap, dataset } = this.props
      if (disabled) return
      e.target.dataset = dataset
      e.currentTarget.dataset = dataset
      if (onTap) {
        onTap(e)
      }
    }
  },
  didMount() {
    this.setData({ hasSlots: Boolean(this.props.$slots.$default) })
  }
})
