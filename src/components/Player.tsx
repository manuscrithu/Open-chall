import { Button, Input, InputRef } from "antd"
import React, { useEffect, useRef, useState } from "react"

interface PlayerProps {
  name: string;
}

export default function Player({ name }: PlayerProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [typeName, setTypeName] = useState<string>('');
  const inputRef = useRef<InputRef>(null);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setTypeName(e.target.value);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus();
    }
  }, [isEditing]);

  return (
    <li>
      <span className="player">
        {
          !isEditing
            ? <span className="player-name">{typeName || name}</span>
            : <Input ref={inputRef} onBlur={handleBlur} placeholder={typeName || name} />
        }
      </span>
      <Button onClick={handleEdit} type='primary'>EDIT</Button>
    </li>
  );
}
