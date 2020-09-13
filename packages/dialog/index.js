Component({
  props: {
    visible: false,
    title: '',
    width: '30%',
    top: '15vh',
    customClass: '',
  },
  methods: {
    handleClose() {
      const { onClose } = this.props
      if (onClose) {
        onClose()
      }
    }
  },
})
