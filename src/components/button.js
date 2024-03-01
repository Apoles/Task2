export function MyButton({ title, ...rest }) {
  return (
    <button {...rest} className='flex flex-row items-center justify-center px-6 py-3.5 text-base rounded-md font-bold'>
      {title}
    </button>
  );
}

export function MyButtonWithIcon({ title, icon, ...rest }) {
  return (
    <button
      {...rest}
      className='flex flex-row items-center justify-center space-x-2 px-6 py-3.5 bg-[#2445D8] rounded-md text-lg font-bold text-white'
    >
      <span>{title}</span>
      {icon}
    </button>
  );
}

export function MyButtonLinked({ title, className, ...rest }) {
  return (
    <button
      {...rest}
      className={`flex flex-row items-center justify-center px-6 py-3.5 text-base rounded-md font-bold ${className}`}
    >
      {title}
    </button>
  );
}
