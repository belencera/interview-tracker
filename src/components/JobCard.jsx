import './JobCard.css'

function JobCard({ job }) {
  return (
    <article className="job-card">
      <span className={`status-badge status-${job.estado.toLowerCase()}`}>{job.estado}</span>
      <h3>{job.puesto}</h3>
      <p><strong>Empresa:</strong> {job.empresa}</p>
      <p><strong>Fecha:</strong> {job.fecha}</p>
      <p><strong>Notas:</strong> {job.notas}</p>
    </article>
  )
}

export default JobCard
