import "./ProjectStyle.css"
import { Link } from "react-router-dom"

function ProjectImage({ image, decscription ,id}) {
    return (
        <div className='project-image'>
            <img src={image} alt="" className='img-project' />
            <div className='project-image-description'>
                <p>{decscription} </p>
                <Link to={`/details/${id}`}>click for details</Link>

            </div>


        </div>
    )
}

export default ProjectImage