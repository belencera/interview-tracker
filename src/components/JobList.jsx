import './JobList.css'
import JobCard from './JobCard.jsx'

function JobList({ jobs, isFormOpen, onToggleForm, onEdit, onDelete }) {
  return (
    <section className="job-list">
      <div className="job-list-header">
        <h2>Candidaturas</h2>
        <button
          type="button"
          className={`toggle-form-button ${isFormOpen ? 'is-open' : 'is-closed'}`}
          onClick={onToggleForm}
        >
          {isFormOpen ? 'Cerrar formulario' : 'Añadir candidatura'}
        </button>
      </div>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} onEdit={() => onEdit(job)} onDelete={() => onDelete(job.id)} />
      ))}
    </section>
  )
}

export default JobList
