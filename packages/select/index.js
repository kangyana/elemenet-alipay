Component({
  props: {
    value: '',
    disabled: '',
    placeholder: '请选择',
    dataSource: [],
    dataset: null,
  },
  data: {
    optionsVisible: false,
  },
  methods: {
    handleInput(e) {
      const { onInput, dataset } = this.props
      const { value } = e.target.dataset.row
      e.target.dataset = dataset
      e.currentTarget.dataset = dataset
      if (onInput) {
        onInput(value, e)
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
