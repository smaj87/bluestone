import { useCallback, useEffect, useRef, useState } from 'utils/react';

interface UseEditableFieldProps {
  initialValue: string;
  onSave: (value: string) => void;
}

export const useEditableField = ({
  initialValue,
  onSave,
}: UseEditableFieldProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(initialValue);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const onEdit = useCallback(() => {
    setEditValue(initialValue);
    setIsEditing(true);
  }, [initialValue]);

  const handleSave = useCallback(() => {
    if (editValue.trim() !== '' && editValue !== initialValue) {
      onSave(editValue.trim());
    }
    setIsEditing(false);
  }, [editValue, initialValue, onSave]);

  const onCancel = useCallback(() => {
    setEditValue(initialValue);
    setIsEditing(false);
  }, [initialValue]);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSave();
      } else if (e.key === 'Escape') {
        onCancel();
      }
    },
    [handleSave, onCancel],
  );

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setEditValue(e.currentTarget.value);
    },
    [],
  );

  return {
    editValue,
    inputRef,
    isEditing,
    onCancel,
    onChange,
    onEdit,
    onKeyDown,
    onSave: handleSave,
  };
};
