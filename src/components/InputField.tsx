import { useFormContext } from 'react-hook-form'
// import toast from 'react-hot-toast'

interface InputFieldProps {
  name: string
  type?: string
  placeholder?: string
  size?: string
}

const InputField: React.FC<InputFieldProps> = ({ name, type = 'text', placeholder = '', size }) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()
  // if(errors[name]){
  //   toast.error(errors[name].message?.toString()||"An error occurred",{duration:4000})}
  // }
  return (
    <div className='flex flex-col items-start gap-1 w-full'>
      <input
        {...register(name)}
        type={type}
        required
        placeholder={placeholder}
        aria-label={placeholder}
        className={`${size}  h-10 w-full rounded-md border border-gray-200 pl-3.5 text-base text-gray-900
        focus:outline-2 focus:-outline-offset-1 focus:outline-black`}
      />
      {errors[name] && <p className='text-sm text-red-800'>{errors[name].message?.toString()}</p>}
    </div>
  )
}

export default InputField
