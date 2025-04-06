import { useFormContext } from 'react-hook-form'

interface InputFieldProps {
  name: string
  type?: string
  placeholder?: string
}

const InputField: React.FC<InputFieldProps> = ({ name, type = 'text', placeholder = '' }) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()
  return (
    <div className='flex flex-col items-start gap-1 w-full'>
      <input
        {...register(name)}
        type={type}
        required
        placeholder={placeholder}
        aria-label={placeholder}
        className='h-10 w-full rounded-md border border-gray-200 pl-3.5 text-base text-gray-900
        focus:outline-2 focus:-outline-offset-1 focus:outline-black'
      />
      {errors[name] && <p className='text-sm text-red-800'>{errors[name].message?.toString()}</p>}
    </div>
  )
}

export default InputField
