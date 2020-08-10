Component({
  props: {
    defaultActive: '',
    menus: []
  },
  methods: {
    change(e) {
      const { key } = e.target.dataset
      const { onChange } = this.props
      if (onChange) {
        onChange(key)
      }
    }
  }
})
