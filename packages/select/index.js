Component({
  props: {
    value: '',
    disabled: '',
    placeholder: '请选择',
    dataSource: [],
  },
  data: {
    optionsVisible: false,
  },
  methods: {
    handleInput(e) {
      const { onInput } = this.props
      const { value } = e.target.dataset.row
      if (onInput) {
        onInput(value)
      }
    },
    handleOptions() {
      const { disabled } = this.props
      if (disabled) return
      const { optionsVisible } = this.data
      this.setData({ optionsVisible: !optionsVisible })
    },
  },
})
