Component({
  props: {
    id: null,
    title: null,
  },
  data: {
    isActive: true
  },
  methods: {
    handleActive() {
      const { isActive } = this.data
      this.setData({
        isActive: !isActive
      })
    }
  }
})
