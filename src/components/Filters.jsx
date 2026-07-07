import './Filters.css'

function Filters({ search, onSearchChange, status, onStatusChange }) {
  return (
    <section className="filters-card">
      <h2 className="filters-title">Filtros de búsqueda</h2>
      <div className="filters-container">
        <div className="search-section">
          <label>
            Buscar
            <input
              type="search"
              placeholder="Empresa o puesto"
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              className="search-input"
            />
          </label>
        </div>
        <div className="filters-section">
          <label>
            Estado
            <select value={status} onChange={(e) => onStatusChange(e.target.value)} className="status-select">
              <option value="">Todos</option>
              <option value="Solicitada">Solicitada</option>
              <option value="Entrevista">Entrevista</option>
              <option value="Oferta">Oferta</option>
              <option value="Rechazada">Rechazada</option>
            </select>
          </label>
        </div>
      </div>
    </section>
  )
}

export default Filters

