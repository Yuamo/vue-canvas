export default {
  data() {
    return {
      baseUrl: './src/assets/images/index/',
      baseImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1490270300120&di=3759d54d72dc421e8f693e38ac4083c3&imgtype=0&src=http%3A%2F%2Ffile06.16sucai.com%2F2016%2F0902%2Fbf9c60a2043e7a01d2f28333a25e49e2.jpg'
    }
  },
  methods: {
    jump(to) {
      if (this.$router && to) {
        // console.log(to)
        if (isNaN(to)) {
          this.$router.push(to)
        } else {
          this.$router.go(to)
        }
      }
    }
  },
  created() {
    window.logColor = function(val) {
      console.log(
        `%c${val}`,
        'background-image:-webkit-gradient( linear, left top, right bottom, color-stop(0, #e22), color-stop(0.15, #a2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) );color:transparent;-webkit-background-clip: text;font-size:1em;'
      )
    }
    window.log = function(val) {
      console.log(val)
    }
  }
}
