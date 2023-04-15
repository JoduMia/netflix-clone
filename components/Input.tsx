import React from 'react';


interface InputProps {
    id: string,
    type: string,
    onChange: any,
    value: string,
    label: string
}
const Input: React.FC<InputProps>= ({
    id,
    type,
    onChange,
    value,
    label
}) => {
  return (
    <div className="relative">
        <input
        id={id}
        type={type}
        onChange={onChange}
        value={value}
        className="
        w-full
        block
        bg-neutral-700
        text-white
        text-lg
        font-semibold
        rounded-md
        px-6
        pt-6
        pb-2
        appearance-none
        focus:outline-none
        focus:ring-0
        peer
        "
        placeholder=" "
        />
        <label
        className="
        flex
        items-center
        gap-1
        absolute
        text-lg
        text-zinc-400
        transform
        -translate-y-3
        duration-150
        left-6
        top-3
        origin-[0]
        scale-75
        peer-placeholder-shown:scale-100
        peer-placeholder-shown:translate-y-0
        peer-focus:scale-75
        peer-focus:-translate-y-3
        perr-focus:text-sm



        "
        htmlFor={id}>
            {label}
        </label>
    </div>
  )
}

export default Input