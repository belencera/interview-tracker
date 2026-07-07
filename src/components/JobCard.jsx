import './JobCard.css'

function JobCard({ job }) {
  return (
    <article className="job-card">
      <span className={`status-badge status-${job.estado.toLowerCase()}`}>{job.estado}</span>
      <div className="job-card-content">
        <div className="job-main">
          <h3>{job.puesto}</h3>
          <p>{job.notas}</p>
        </div>
        <div className="job-details">
          <p><strong>Empresa:</strong> {job.empresa}</p>
          <p><strong>Fecha:</strong> {job.fecha}</p>
        </div>
      </div>
    </article>
  )
}

export default JobCard
