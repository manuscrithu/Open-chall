import { Button, Input, InputRef } from "antd"
import { useEffect, useRef, useState } from "react"

interface PlayerProps {
  name: string,
  symbol: string,
  isActive: boolean
}

export default function Player({ name, symbol, isActive }: PlayerProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [currentName, setCurrentName] = useState(name)
  const [tempName, setTempName] = useState("")
  const inputRef = useRef<InputRef>(null)

  const handleEdit = () => {
    setTempName("") // clear input
    setIsEditing(true)
  }

  const handleBlur = () => {
    if (tempName.trim() !== "") {
      setCurrentName(tempName.trim())
    }
    setIsEditing(false)
  }

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus()
    }
  }, [isEditing])

  return (
    <li className={isActive? 'active' : undefined}>
      <span className='player'>
        {!isEditing ? (
          <span className='player-name'>{currentName}</span>
        ) : (
          <Input
            ref={inputRef}
            value={tempName}
            placeholder={currentName}
            onChange={(e) => setTempName(e.target.value)}
            onBlur={handleBlur}
          />
        )}
      </span>
      <span>{symbol}</span>
      <Button onClick={handleEdit}>Edit</Button>
    </li>
  )
}
