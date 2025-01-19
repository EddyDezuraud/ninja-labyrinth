import type { Meta, StoryObj } from '@storybook/vue3'
import KeyboardKey from './KeyboardKey.vue'

const meta = {
  title: 'UI/KeyboardKey',
  component: KeyboardKey,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} satisfies Meta<typeof KeyboardKey>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    default: 'e',
  },
}
