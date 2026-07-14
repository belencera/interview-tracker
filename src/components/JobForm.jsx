import { useState, useEffect } from 'react'
import './JobForm.css'

const emptyForm = {
  empresa: '',
  puesto: '',
  estado: '',
  fecha: '',
  notas: '',
}

function JobForm({ onAddJob, onUpdateJob, editingJob, onCancel }) {
  const [form, setForm] = useState(emptyForm)

  useEffect(() => {
    if (editingJob) {
      setForm(editingJob)
    } else {
      setForm(emptyForm)
    }
  }, [editingJob])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((p) => ({ ...p, [name]: value }))
  }

  const submit = (e) => {
    e.preventDefault()
    if (editingJob && onUpdateJob) {
      onUpdateJob(form)
    } else if (onAddJob) {
      onAddJob(form)
      setForm(emptyForm)
    }
  }

  return (
    <section className="job-form">
      <h2>{editingJob ? 'Editar candidatura' : 'Agregar candidatura'}</h2>
      <form onSubmit={submit}>
        <label>
          Empresa
          <input type="text" name="empresa" placeholder="Nombre de la empresa" value={form.empresa} onChange={handleChange} required />
        </label>
        <label>
          Puesto
          <input type="text" name="puesto" placeholder="Nombre del puesto" value={form.puesto} onChange={handleChange} required />
        </label>
        <label>
          Estado
          <select name="estado" value={form.estado} onChange={handleChange} required>
            <option value="">Selecciona un estado</option>
            <option value="Solicitada">Solicitada</option>
            <option value="Entrevista">Entrevista</option>
            <option value="Oferta">Oferta</option>
            <option value="Rechazada">Rechazada</option>
          </select>
        </label>
        <label>
          Fecha
          <input type="date" name="fecha" value={form.fecha} onChange={handleChange} />
        </label>
        <label>
          Notas
          <textarea name="notas" rows="3" placeholder="Notas adicionales" value={form.notas} onChange={handleChange} />
        </label>
        <div className="form-actions">
          <button type="submit">{editingJob ? 'Guardar cambios' : 'Guardar candidatura'}</button>
          <button type="button" className="button-secondary" onClick={onCancel}>Cancelar</button>
        </div>
      </form>
    </section>
  )
}

export default JobForm
