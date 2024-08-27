import toast from 'react-hot-toast'
import { type IBannerProps } from '../Banner'

export const mockBannerBase: IBannerProps = {
  headTitle: 'Кредит на любые цели',
  subtitle: 'до 5 млн рублей',
  buttonsConfig: {
    primary: {
      onClick: () => toast.success('@click on primary btn'),
      children: 'Primary'
    },
    secondary: {
      onClick: () => toast.success('@click on secondary btn'),
      children: 'Secondary'
    }
  }
}
export const mockBannerOnlyPrimaryButton: IBannerProps = {
  headTitle: 'Кредит на любые цели',
  subtitle: 'до 5 млн рублей',
  buttonsConfig: {
    primary: {
      onClick: () => toast.success('@click on primary btn'),
      children: 'Primary'
    }
  }
}
