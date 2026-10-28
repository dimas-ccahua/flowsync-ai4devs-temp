import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'

import { AssigneeAvatar } from './assignee-avatar'

const meta = {
  component: AssigneeAvatar,
  tags: ['ai-generated'],
  args: {
    assignee: { fullName: 'Lucía Fernández', initials: 'LF' },
  },
} satisfies Meta<typeof AssigneeAvatar>

export default meta
type Story = StoryObj<typeof meta>

// El nombre completo es la etiqueta accesible; las iniciales solo se ven.
export const ConNombre: Story = {
  play: async ({ canvas }) => {
    const avatar = canvas.getByRole('img', { name: 'Lucía Fernández' })
    await expect(avatar).toBeVisible()
    await expect(avatar).toContainElement(canvas.getByText('LF'))
  },
}

// Persona sin nombre en su perfil: la etiqueta lo dice y se ven sus iniciales.
export const SinNombre: Story = {
  args: {
    assignee: { fullName: null, initials: 'CI' },
  },
  play: async ({ canvas }) => {
    const avatar = canvas.getByRole('img', { name: 'Sin nombre' })
    await expect(avatar).toBeVisible()
    await expect(avatar).toContainElement(canvas.getByText('CI'))
  },
}

// Sin responsable no hay iniciales que enseñar: un icono y la etiqueta «Sin asignar».
export const SinAsignar: Story = {
  args: { assignee: null },
  play: async ({ canvas }) => {
    const avatar = canvas.getByRole('img', { name: 'Sin asignar' })
    await expect(avatar).toBeVisible()
    await expect(avatar).toHaveTextContent(/^$/)
  },
}
