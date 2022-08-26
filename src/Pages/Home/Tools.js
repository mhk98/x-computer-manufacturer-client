import useTools from '../../hooks/useTools';
import Tool from './Tool';

const Tools = () => {
    const [tools] = useTools()
    return (
        <div>
            <h2 className='border-b-2 w-12 border-primary text-xl font-bold my-8'>Categories</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2'>
            {
                tools.map(tool  => <Tool key={tool._id} tool={tool}></Tool>)
            }
            </div>
        </div>
    );
};

export default Tools;