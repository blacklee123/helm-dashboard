import type { Meta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { BsGithub, BsSlack } from 'react-icons/bs'
import DropDown from './DropDown'

const meta = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'DropDown',
  component: DropDown,
} as Meta<typeof DropDown>

export default meta

function onClick() {
  action('onClick')('drop down clicked')
}

export const Default = {
  args: {
    items: [
      { id: '1', text: 'Menu Item 1', onClick, icon: <BsSlack /> },
      { id: '2 ', isSeparator: true },
      { id: '3', text: 'Menu Item 3', isDisabled: true, icon: <BsGithub /> },
    ],
  },
}
