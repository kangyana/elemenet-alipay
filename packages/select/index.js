Component({
  props: {
    value: '',
    disabled: '',
    placeholder: '请选择',
    dataSource: [],
  },
  data: {
    optionsVisible: false,
    selectValue: '',
    selectLabel: '',
  },
  methods: {
    handleInput(e) {
      const { onInput } = this.props
      const { value, label } = e.target.dataset.row
      this.setData({
        selectValue: value,
        selectLabel: label
      })
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
    getValue() {
      const { value, dataSource } = this.props
      const row = dataSource.find(v => v.value === value)
      if (!row) return
      this.setData({
        selectValue: row.value,
        selectLabel: row.label
      })
    }
  },
  didMount() {
    this.getValue()
  }
})
