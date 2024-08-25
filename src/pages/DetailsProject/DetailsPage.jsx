import Details from '../../components/DetailsComponent/Details';
import { useParams } from 'react-router-dom';
import array from '../../components/Projects/ArrayProjects';


function DetailsPage() {
    const { id } = useParams();
    console.log(id)
    let element = array[id]
    return (
        
        <div>
            <Details image1={element.image1} image2={element.image2} image3={element.image3} name={element.name} link={element.link}
            about ={element.about} numberPage={element.number} technique={element.develop}
            visible={element.visible} reactLink={element.reactLink}/>

        </div>
    )
}

export default DetailsPage