import './JobList.css'
import JobCard from './JobCard.jsx'

function JobList({ jobs, isFormOpen, onToggleForm }) {
  return (
    <section className="job-list">
      <div className="job-list-header">
        <h2>Candidaturas</h2>
        <button type="button" className="toggle-form-button" onClick={onToggleForm}>
          {isFormOpen ? 'Cerrar formulario' : 'Añadir candidatura'}
        </button>
      </div>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </section>
  )
}

export default JobList
