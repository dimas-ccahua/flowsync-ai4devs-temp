import { UserRoundIcon } from 'lucide-react'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import type { TaskAssignee } from '@/lib/types'

type AssigneeAvatarProps = {
  assignee: Pick<TaskAssignee, 'fullName' | 'initials'> | null
  className?: string
}

/**
 * El responsable de una tarea en un círculo: se ven sus iniciales y se anuncia
 * su nombre completo. Sin responsable, un icono y la etiqueta «Sin asignar».
 */
export function AssigneeAvatar({ assignee, className }: AssigneeAvatarProps) {
  if (assignee === null) {
    return (
      <Avatar role="img" aria-label="Sin asignar" className={className}>
        <AvatarFallback className="border-border border border-dashed">
          <UserRoundIcon className="size-4" aria-hidden="true" />
        </AvatarFallback>
      </Avatar>
    )
  }

  return (
    <Avatar
      role="img"
      aria-label={assignee.fullName ?? 'Sin nombre'}
      className={className}
    >
      <AvatarFallback className="text-xs font-medium">
        <span aria-hidden="true">{assignee.initials}</span>
      </AvatarFallback>
    </Avatar>
  )
}
