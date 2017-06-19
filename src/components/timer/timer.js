class Timer {
  countDown(end, update, handle) {
    const now = new Date().getTime()
    const vm = this
    if (now - end) {
      handle.call(vm)
    } else {
      let lastTime = end - now
      const pxD = 1000 * 60 * 60 * 24
      const pxH = 1000 * 60 * 60
      const pxM = 1000 * 60
      const pxS = 1000
      let d = Math.floor(lastTime / pxD)
      let h = Math.floor((lastTime - d * pxD) / pxH)
      let m = Math.floor((lastTime - d * pxD - h * pxH) / pxM)
      let s = Math.floor((lastTime - d * pxD - h * pxH - m * pxM) / pxS)
      let r = []
      if (d > 0) {
        r.push(`<em>${d}</em>天`)
      }
      if (r.length || h > 0) {
        r.push(`<em>${h}</em>时`)
      }
      if (r.length || m > 0) {
        r.push(`<em>${m}</em>分`)
      }
      if (r.length || s > 0) {
        r.push(`<em>${s}</em>秒`)
      }
      vm.lastTime = r.join()
      update.call(vm, r.join())
      setTimeout(function() {
        vm.countDown(end, update, handle)
      }, 1000)
    }
  }
}

export default {
  Timer
}
