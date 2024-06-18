import type { Meta, StoryObj } from '@storybook/react'
import QIframe from './Iframe'

const meta = {
  title: 'QAQ/QIframe',
  component: QIframe,
  tags: ['autodocs'],
  args: {
    src: 'https://qaq.pandadagames.net/docs/docs/help/',
    title: '帮助中心',
  },
} satisfies Meta<typeof QIframe>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    src: 'https://qaq.pandadagames.net/docs/docs/help/',
    title: '帮助中心',
  },
}
