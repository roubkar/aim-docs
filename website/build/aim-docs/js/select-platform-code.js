window.addEventListener('load', function() {
  function getPlatform() {
    const platform = window.navigator.platform

    if (/windows/i.test(platform)) return 'Windows'
    else if (/mac/i.test(platform)) return 'macOS'
    else if (/linux/i.test(platform)) return 'Linux'
    else return ''
  }

  this.document.querySelectorAll('.platform-code').forEach(el => {
    const tabs = el.querySelectorAll('.nav-tabs .nav-link')
    const panes = el.querySelectorAll('.tab-content .tab-pane')
    const platform = getPlatform()
    if (platform) {
      tabs.forEach((tab, i) => {
        tab.classList.remove('active')
        panes[i].classList.remove('active')

        if (tab.textContent.trim() === platform) {
          tab.classList.add('active')
          panes[i].classList.add('active')
        }
      })
    }
  })
})
