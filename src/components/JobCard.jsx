import './JobCard.css'

function formatDate(dateString) {
  if (!dateString) return ''
  const [year, month, day] = dateString.split('-')
  return `${day}/${month}/${year}`
}

function JobCard({ job, onEdit, onDelete }) {
  return (
    <article className="job-card">
      <div className="job-actions">
        <button type="button" className="action-edit" onClick={onEdit} aria-label="Editar">✏️</button>
        <button type="button" className="action-delete" onClick={onDelete} aria-label="Eliminar">🗑️</button>
      </div>
      <span className={`status-badge status-${job.estado.toLowerCase()}`}>{job.estado}</span>
      <div className="job-card-content">
        <div className="job-main">
          <h3>{job.puesto}</h3>
          <p>{job.notas}</p>
        </div>
        <div className="job-details">
          <p><strong>Empresa:</strong> {job.empresa}</p>
          <p><strong>Fecha:</strong> {formatDate(job.fecha)}</p>
        </div>
      </div>
    </article>
  )
}

export default JobCard
