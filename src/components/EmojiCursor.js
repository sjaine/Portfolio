import { useCursorify } from '@cursorify/react'

function EmojiCursor() {
  const { mouseState, style } = useCursorify();

  return (
    <div
      style={{
        width: 40,
        height: 40,
        fontSize: 30,
      }}
    >
      {(() => {
        if (mouseState === 'mouseDown') return '✊'
        if (style === 'pointer') return '👆'
        return '🖐️'
      })()}
    </div>
  )
}

export default EmojiCursor;