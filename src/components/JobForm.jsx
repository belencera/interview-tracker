import './JobForm.css'

function JobForm() {
  return (
    <section className="job-form">
      <h2>Agregar candidatura</h2>
      <form>
        <label>
          Empresa
          <input type="text" name="empresa" placeholder="Nombre de la empresa" />
        </label>
        <label>
          Puesto
          <input type="text" name="puesto" placeholder="Nombre del puesto" />
        </label>
        <label>
          Estado
          <select name="estado">
            <option value="">Selecciona un estado</option>
            <option value="Solicitada">Solicitada</option>
            <option value="Entrevista">Entrevista</option>
            <option value="Oferta">Oferta</option>
            <option value="Rechazada">Rechazada</option>
          </select>
        </label>
        <label>
          Fecha
          <input type="date" name="fecha" />
        </label>
        <label>
          Notas
          <textarea name="notas" rows="3" placeholder="Notas adicionales" />
        </label>
        <button type="submit">Guardar candidatura</button>
      </form>
    </section>
  )
}

export default JobForm
