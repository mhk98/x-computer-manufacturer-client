import useTools from '../../hooks/useTools';
import Tool from './Tool';

const Tools = () => {
    const [tools] = useTools()
    return (
        <div>
            <h2 className='text-3xl font-bold mt-12'>Our X Computer Manufacturer Tools</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                tools.map(tool  => <Tool key={tool._id} tool={tool}></Tool>)
            }
            </div>
        </div>
    );
};

export default Tools;