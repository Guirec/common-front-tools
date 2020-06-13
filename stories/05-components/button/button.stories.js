// html
import buttonDefault from './button-default.html'
import buttonReversed from './button-reversed.html'
import buttonPrimary from './button-primary.html'
import buttonDisabled from './button-disabled.html'
import buttonLoading from './button-loading.html'
// docs
import mdx from './button.mdx'

export default {
  title: 'Components/Button',
  parameters: {
    docs: { page: mdx },
  },
}

export const Default = () => buttonDefault
export const Reversed = () => buttonReversed
export const Primary = () => buttonPrimary
export const Disabled = () => buttonDisabled
export const Loading = () => buttonLoading
