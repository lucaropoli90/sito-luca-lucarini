interface SkillBarProps {
  name: string
  percentage: number
}

export function SkillBar({ name, percentage }: SkillBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm font-medium">{percentage}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
        <div className="h-2 rounded-full bg-gray-900 dark:bg-gray-300" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  )
}

