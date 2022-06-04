import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useBuyDetails from '../../hooks/useBuyDetails';



const BuyNow = () => {
    const {id} = useParams();
    const [tool] = useBuyDetails(id);
    const [user] = useAuthState(auth)
    const {_id} = tool;

    

    console.log(tool)

    
    const handleOrderSubmit = event =>{
      event.preventDefault()

      const order ={
        // name: user.displayName,
        toolId: _id,
        // tool: name,
        name: tool.name,
        email: user.email,
        address: event.target.address.value,
        phone: event.target.phone.value,
        quantity: event.target.quantity.value,
        price: tool.price,
      }

      if(tool.moquantity>event.target.quantity.value){
        alert(`You have to purchase at list ${tool.moquantity} products`)
      }

      if(tool.aquantity<event.target.quantity.value){
        alert(`We have available ${tool.aquantity} products`)
      }
      

      fetch('https://damp-falls-64903.herokuapp.com/order',{
        method: 'POST',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(order)
      })

      .then(res => res.json())
      .then(data =>{
        if(data){
          toast('Your order is complete')
          event.target.reset()
        }
      })


      
      }



    return (
        
            <div className='flex justify-center items-center w-full'>
              <form onSubmit={handleOrderSubmit}>
                <h2 className='text-2xl font-bold'>Order Information</h2>
    
            <div class="form-control w-full max-w-s">
                    <label class="label">
                        <span class="label-text">Name</span>
                    </label>
                    <input type="text" name='name' value={tool.name} class="input input-bordered w-full max-w-xs" />
                    
            </div>
            <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Email</span>
                    </label>
                    <input type="text" name='email' value={user?.email} class="input input-bordered w-full max-w-xs" />
            </div>
            <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Address</span>
                    </label>
                    <input type="text" name='address' placeholder=" " class="input input-bordered w-full max-w-xs" />
            </div>
            <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Phone Number</span>
                    </label>
                    <input type="text" name='phone' placeholder=" " class="input input-bordered w-full max-w-xs" />
            </div>
            <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Quantity</span>
                    </label>
                    <input type="text" name='quantity' class="input input-bordered w-full max-w-xs" />
            </div>
            <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Price</span>
                    </label>
                    <input type="text" name='price' value={tool.price} class="input input-bordered w-full max-w-xs" />
            </div>

        <input className='btn bg-primary mt-4 border-0' type="submit" value="Place an Order" class="btn" />
           


          </form>

            </div>

        
    
        
    );
};

export default BuyNow;