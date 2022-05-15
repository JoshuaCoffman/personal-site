import ProjectDisplay from '../../components/ProjectDisplay/ProjectDisplay';
import superSewerBrosScreenshot from '../../Images/SuperSewerBros_Screenshot.png';
import samuraiBebopScreenshot from '../../Images/SamuraiBebop_Screenshot.png';


import './Projects.css';

function Projects() {
    return (
        <div className='Projects'>
            <ProjectDisplay title='Super Sewer Bros.' description='A side scroller about a crocodile in a sewer. UNFINISHED.' image={superSewerBrosScreenshot} />
            <ProjectDisplay title='Samurai Bebop' description='A zelda like about a samurai fighting off crazy enemies. UNFINISHED.' image={samuraiBebopScreenshot} />
        </div>
    );

}

export default Projects;