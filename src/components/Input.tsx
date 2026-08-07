import { type InputHTMLAttributes, type TextareaHTMLAttributes, type SelectHTMLAttributes, forwardRef } from 'react'
import { colors, radius } from '@/tokens/design-system'

// ─── Shared label ─────────────────────────────────────────────────────────────

type LabelProps = { children: React.ReactNode; htmlFor?: string; dark?: boolean }

export function Label({ children, htmlFor, dark = false }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      style={{
        display: 'block',
        fontSize: '0.75rem',
        fontWeight: 500,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: dark ? colors.cream[400] : colors.cream[500],
        marginBottom: '8px',
      }}
    >
      {children}
    </label>
  )
}

// ─── Shared field styles ──────────────────────────────────────────────────────

function fieldStyle(dark: boolean): React.CSSProperties {
  return {
    width: '100%',
    padding: '12px 16px',
    fontSize: '0.875rem',
    fontWeight: 300,
    fontFamily: "'Outfit', system-ui, sans-serif",
    lineHeight: 1.5,
    borderRadius: radius.lg,
    border: `1px solid ${dark ? 'rgba(255,255,255,0.12)' : colors.cream[300]}`,
    backgroundColor: dark ? 'rgba(255,255,255,0.08)' : colors.white,
    color: dark ? colors.cream[100] : colors.chocolate,
    outline: 'none',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
    boxSizing: 'border-box',
  }
}

function focusStyle(dark: boolean) {
  return {
    onFocus: (e: React.FocusEvent<HTMLElement>) => {
      e.target.style.borderColor = dark ? colors.gold : colors.rose
      e.target.style.boxShadow = dark
        ? `0 0 0 3px rgba(201,162,39,0.15)`
        : `0 0 0 3px rgba(212,120,138,0.12)`
    },
    onBlur: (e: React.FocusEvent<HTMLElement>) => {
      e.target.style.borderColor = dark ? 'rgba(255,255,255,0.12)' : colors.cream[300]
      e.target.style.boxShadow = 'none'
    },
  }
}

// ─── TextInput ────────────────────────────────────────────────────────────────

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  dark?: boolean
  error?: string
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, dark = false, error, id, ...rest }, ref) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {label && <Label htmlFor={id} dark={dark}>{label}</Label>}
      <input
        ref={ref}
        id={id}
        style={fieldStyle(dark)}
        {...focusStyle(dark)}
        {...rest}
      />
      {error && (
        <span style={{ fontSize: '0.75rem', color: colors.rose, fontWeight: 400 }}>
          {error}
        </span>
      )}
    </div>
  ),
)
TextInput.displayName = 'TextInput'

// ─── Textarea ─────────────────────────────────────────────────────────────────

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string
  dark?: boolean
  error?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, dark = false, error, id, rows = 4, ...rest }, ref) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {label && <Label htmlFor={id} dark={dark}>{label}</Label>}
      <textarea
        ref={ref}
        id={id}
        rows={rows}
        style={{ ...fieldStyle(dark), resize: 'none' }}
        {...focusStyle(dark)}
        {...rest}
      />
      {error && (
        <span style={{ fontSize: '0.75rem', color: colors.rose, fontWeight: 400 }}>
          {error}
        </span>
      )}
    </div>
  ),
)
Textarea.displayName = 'Textarea'

// ─── Select ───────────────────────────────────────────────────────────────────

type SelectInputProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string
  dark?: boolean
  placeholder?: string
  options: { value: string; label: string }[]
}

export function SelectInput({ label, dark = false, placeholder, options, id, ...rest }: SelectInputProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', position: 'relative' }}>
      {label && <Label htmlFor={id} dark={dark}>{label}</Label>}
      <div style={{ position: 'relative' }}>
        <select
          id={id}
          style={{
            ...fieldStyle(dark),
            appearance: 'none',
            paddingRight: '40px',
            cursor: 'pointer',
          }}
          {...focusStyle(dark)}
          {...rest}
        >
          {placeholder && (
            <option value="" style={{ backgroundColor: dark ? colors.chocolate : colors.white }}>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option
              key={opt.value}
              value={opt.value}
              style={{ backgroundColor: dark ? colors.chocolate : colors.white }}
            >
              {opt.label}
            </option>
          ))}
        </select>
        {/* Chevron icon */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          style={{
            position: 'absolute',
            right: '14px',
            top: '50%',
            transform: 'translateY(-50%)',
            pointerEvents: 'none',
            color: dark ? colors.cream[400] : colors.cream[500],
          }}
        >
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  )
}
