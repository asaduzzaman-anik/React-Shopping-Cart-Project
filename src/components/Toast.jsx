function Toast({ toasts, onClose }) {
  if (toasts.length === 0) return null

  return (
    <div className="toast-stack" aria-live="polite" aria-relevant="additions">
      {toasts.map((toast) => (
        <div key={toast.id} className="toast" role="status">
          <span className="toast__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12.5l2.5 2.5L16 9.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <p className="toast__message">{toast.message}</p>
          <button
            type="button"
            className="toast__close"
            aria-label="Dismiss notification"
            onClick={() => onClose(toast.id)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      ))}
    </div>
  )
}

export default Toast
