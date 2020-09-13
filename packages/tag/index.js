Component({
  props: {
    type: 'default',
    customClass: '',
    customStyle: '',
  },
  methods: {
    tap(e) {
      const { onTap, dataset } = this.props
      e.target.dataset = dataset
      e.currentTarget.dataset = dataset
      if (onTap) {
        onTap(e)
      }
    }
  },
})
