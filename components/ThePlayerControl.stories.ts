import type { Meta, StoryObj } from '@storybook/vue3'
import ThePlayerControl from './ThePlayerControl.vue'

const meta = {
  title: 'Components/ThePlayerControl',
  component: ThePlayerControl,
  tags: ['autodocs'],
} satisfies Meta<typeof ThePlayerControl>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    activeButtons: new Set('z'),
    showInteractButton: false,
  },
}
