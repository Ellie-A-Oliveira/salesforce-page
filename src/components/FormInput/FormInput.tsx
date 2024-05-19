import { FormInputStyle } from "./FormInput.style"

interface FormInputProps {
  children: React.ReactNode
  inputType: string
  className?: string
  name: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
}

export const FormInput = ( {children, inputType, className, name, onChange, required=false}: FormInputProps ) => {

  return (
    
    <FormInputStyle className={className}>
    
        {inputType === "checkbox" ? 
        (<>
            <input required={required} onChange={onChange} name={name}
                type={inputType}
                placeholder="Digite um valor..." />
            <label htmlFor={name} className="label">{children}</label>
        </>
        ) : (
            <>
            <label htmlFor={name} className="block label">{children}</label>
                        <input required={required} onChange={onChange} name={name}
                            type={inputType}
                            placeholder="Digite um valor..."
                            className="input" />
        </>
        )}
    </FormInputStyle>
  )
}