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
    icon: ''
  },
  methods: {
    tap(e) {
      const { disabled } = this.props
      if (disabled) return
      const { onTap } = this.props
      if (onTap) {
        onTap(e)
      }
    }
  },
  didMount() {
    this.setData({ hasSlots: Boolean(this.props.$slots.$default) })
  }
})
