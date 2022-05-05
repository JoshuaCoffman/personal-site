import './ProjectDisplay.css';

interface props {
    title: string;
    description: string;
    image: string;
}

function ProjectDisplay(props: props) {
    return (
        <div className='projectDisplay'>
            <h1 className='title'>{props.title}</h1>
            <p className='description'>{props.description}</p>
            <img className='screenshot' src={props.image} alt='screenshot'></img>
        </div>
    );
}

export default ProjectDisplay;