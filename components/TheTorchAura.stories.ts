import type { Meta, StoryObj } from '@storybook/vue3'
import TheTorchAura from './TheTorchAura.vue'

const meta = {
  title: 'Components/TheTorchAura',
  component: TheTorchAura,
  tags: ['autodocs'],
} satisfies Meta<typeof TheTorchAura>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
