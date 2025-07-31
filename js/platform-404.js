import '../assets/scss/common.scss'
import '../assets/scss/components/_breadcrumb.scss'
import '../assets/scss/components/_cards.scss'
import '../assets/scss/components/_buttons.scss'
import '../assets/scss/components/_promotion.scss'
import '../assets/scss/pages/platform-404.scss'

console.log('Platform-404 page Loaded')

// 檢查頁面有無水平滾動條
let resizeTimer

function debounceCheckHorizontalScroll() {
  clearTimeout(resizeTimer)
  resizeTimer = setTimeout(() => {
    if (document.body.scrollWidth > window.innerWidth) {
      console.warn('⚠️ 警告：頁面有水平滾動條！')
    } else {
      console.log('✅ 頁面無水平滾動條。')
    }
  }, 250) // 在視窗大小調整停止 250 毫秒後才執行
}

window.addEventListener('load', debounceCheckHorizontalScroll)
window.addEventListener('resize', debounceCheckHorizontalScroll)
