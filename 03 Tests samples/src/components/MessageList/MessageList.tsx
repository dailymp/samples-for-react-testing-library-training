import React from 'react';
import './MessageList.less';
import { Message } from '../../model';

interface MessageListProps {
  messages: Message[];
}

export const MessageList = (props: MessageListProps) => {
  const [clickPosition, setClickPosition] = React.useState({
    clientX: 0,
    clientY: 0,
  });
  const [showContextMenu, setShowContextMenu] = React.useState(false);

  const handleContextMenu = (event: React.MouseEvent) => {
    setClickPosition({ clientX: event.clientX, clientY: event.clientY });
    event.preventDefault();
    document.addEventListener('mousedown', handleClickAfterContextMenuOpen);
    setShowContextMenu(true);
  };

  const handleOnMouse = (event: React.MouseEvent) => {
    event.type === 'mousedown' ? alert('mousedown') : alert('mouseup');
  };

  const handleClickAfterContextMenuOpen = (e: MouseEvent) => {
    // Only if the left button is clicked - number 1
    // We need to perform this check since this method will also get called when right-clicking
    if (e.which === 1) {
      document.removeEventListener(
        'mousedown',
        handleClickAfterContextMenuOpen
      );
      setTimeout(() => setShowContextMenu(false), 100);
    }
  };

  return (
    <div onContextMenu={handleContextMenu} className="messages-table-container">
      <table className="messages-table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {props.messages.map((message) => (
            <tr
              key={message.id}
              onMouseDown={handleOnMouse}
              onMouseUp={handleOnMouse}
            >
              <td>{message.subject}</td>
              <td>{message.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {showContextMenu && (
        <div
          className="context-menu-info"
          style={{ top: clickPosition.clientY, left: clickPosition.clientX }}
        >
          <div>
            {`Context menu top-position:${clickPosition.clientY}  left-position:${clickPosition.clientX}`}
          </div>
        </div>
      )}
    </div>
  );
};
