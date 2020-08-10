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
  },
  methods: {
    handleInput(e) {
      const { onInput } = this.props
      if (onInput) {
        onInput(e.detail.value)
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
