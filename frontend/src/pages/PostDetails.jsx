import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { BiEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';

const PostDetails = () => {
  return (
    <div>
      <Navbar />
      <div className='px-8 md:px-[200px] mt-8'>
        <div className='flex justify-between items-center'>
          <h1 className='text-2xl md:text-3xl font-bold text-black'>
            10 Uses of Artificial Intelligence in Day to Day Life
          </h1>
          <div className='flex items-center justify-center space-x-2'>
            <p>
              <BiEdit />
            </p>
            <p>
              <MdDelete />
            </p>
          </div>
        </div>
        <div className='flex items-center justify-between mt-2 md:mt-4'>
          <p className=''>@anikjoyy</p>
          <div className='flex space-x-2'>
            <p>24/09/2023</p>
            <p>19:24</p>
          </div>
        </div>
        <img
          src='https://i.ibb.co/HhJBj0v/reception.jpg'
          alt=''
          className='w-full mx-auto mt-8'
        />
        <p className='mx-auto mt-8'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, non
          deleniti nisi earum nobis ut, reiciendis ducimus eaque vero tempora
          officia itaque, obcaecati autem delectus ad quidem quis quia in?
          Fugiat corporis et impedit odit vero ad aliquam est saepe mollitia
          recusandae nisi opt
        </p>
        <div className='flex items-center mt-8 space-x-4 font-semibold'>
          <p>Categories:</p>
          <div className='flex justify-center items-center space-x-2'>
            <div className='bg-gray-300 rounded-lg px-3 py-1'>Tech</div>
            <div className='bg-gray-300 rounded-lg px-3 py-1'>AI</div>
          </div>
        </div>
        {/* all comments  */}
        <div className='flex flex-col mt-4'>
          <h3 className='mt-6 mb-4 font-semibold'>Comments:</h3>
          {/* comments  */}
          <div className='px-2 py-2 bg-gray-200 rounded-lg'>
            <div className='flex items-center justify-between'>
              <h3 className='font-bold text-gray-600'>ANikhooy</h3>
              <div className='flex justify-center items-center space-x-4'>
                <p className='text-gray-500 text-sm'>24/09/2023</p>
                <p className='text-gray-500 text-sm'>21:23</p>
                <div className='flex items-center justify-center space-x-2'>
                  <p>
                    <BiEdit />
                  </p>
                  <p>
                    <MdDelete />
                  </p>
                </div>
              </div>
            </div>
            <p className='px-4 mt-2'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
              necessitatibus dolore iure?
            </p>
          </div>
        </div>
        {/* write a comment  */}
        <div className='w-full flex flex-col mt-4 md:flex-col lg:flex-row'>
          <input
            className='lg:w-[80%] outline-none py-2 px-4 mt-4 md:mt-0'
            placeholder='Write a comment'
            type='text'
          />
          <button className='lg:w-[20%] mt-4 md:mt-2 px-4 py-2 bg-black text-white hover:bg-gray-500'>
            Add Comment
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostDetails;
