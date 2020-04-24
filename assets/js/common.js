//
// Common
// --------------------------------------------------------------------------

// Components
import state from './components/states'

document.addEventListener('storyUpdated', () => {
  const components = document.querySelectorAll('[data-component]')

  components.forEach((component) => {
    const dataComponent = component.dataset.component

    switch (dataComponent) {
      case 'state':
        state(component)
        break
      default:
        break
    }
  })
})
