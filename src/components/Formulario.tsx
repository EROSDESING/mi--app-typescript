import { useForm } from '../hooks/useForm'

interface FormData {
  email: string
  nombre: string
}

export const Formulario = () => {
  const { handleChange, formulario, nombre, email } = useForm<FormData>({
    email: '',
    nombre: '',
  })

  return (
    <form autoComplete="of">
      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input
          type="text"
          className="form-control"
          name="nombre"
          value={nombre}
          onChange={handleChange}
        />
      </div>
      <pre>{JSON.stringify(formulario)}</pre>
    </form>
  )
}
