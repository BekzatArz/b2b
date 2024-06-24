import React from 'react';
import '../../styles/Popup/Popup.css';

interface PopupProps {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Popup: React.FC<PopupProps>   = ({ show, onClose, children }) => {
  return (
    <div style={{opacity: show? 1: 0, zIndex: show?20:-20}} className="popup-overlay" onClick={onClose}>
      <div className="popup" onClick={e => e.stopPropagation()}>
        <div className="popup-content">{children}</div>
      </div>
    </div>
  );
};

export default Popup;