Component({
  props: {
    type: 'input',
    size: 'medium',
    readonly: false,
    autofocus: false,
    maxlength: null,
    placeholder: '',
    trim: '',
    autoHeight: true,
    value: '',
    disabled: false,
    prefixIcon: '',
    suffixIcon: '',
    customClass: '',
    customStyle: '',
    dataset: null,
  },
  methods: {
    handleInput(e) {
      const { onInput, dataset } = this.props
      const { value } = e.detail
      e.target.dataset = dataset
      e.currentTarget.dataset = dataset
      if (onInput) {
        onInput(value, e)
      }
    },
    focus(e) {
      const { onFocus } = this.props
      if (onFocus) {
        onFocus(e)
      }
    },
    blur(e) {
      const { onBlur } = this.props
      if (onBlur) {
        onBlur(e)
      }
    },
  },
})
