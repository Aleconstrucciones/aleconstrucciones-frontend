interface FloatingInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

export function FloatingInput({ label, name, ...props }: FloatingInputProps) {
  return (
    <div className="relative w-full">
      <input
        name={name}
        placeholder={label}
        className="
          peer
          w-full
          rounded-2xl
          border-2 border-accent/40
          px-4 pt-6 pb-2
          text-white
          placeholder-transparent
          focus:outline-none
          focus:border-accent/70
          transition
        "
        {...props}
      />

      <label
        className="
          absolute
          left-4
          top-2
          text-sm
          text-description/50
          transition-all
          duration-200
          pointer-events-none

          peer-placeholder-shown:top-4
          peer-placeholder-shown:text-base
          peer-placeholder-shown:text-description/40

          peer-focus:top-2
          peer-focus:text-sm
          peer-focus:text-description
        "
      >
        {label}
      </label>
    </div>
  );
}

