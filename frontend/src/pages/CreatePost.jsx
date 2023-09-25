import { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { ImCross } from 'react-icons/im';

const CreatePost = () => {
  const [cat, setCat] = useState('');
  const [cats, setCats] = useState([]);
  const deleteCategory = (i) => {
    let updatedCats = [...cats];
    updatedCats.splice(i);
    setCats(updatedCats);
  };
  const addCategory = () => {
    let updatedCats = [...cats];
    updatedCats.push(cat);
    setCat('');
    setCats(updatedCats);
  };

  return (
    <div>
      <Navbar />
      <div className='px-6 md:px-[200px] mt-8'>
        <h1 className='font-bold md:text-2xl text-xl mt-8'>Create a Post</h1>
        <form className='w-full flex flex-col space-y-4 md:space-y-8 mt-4'>
          <input
            type='text'
            placeholder='Enter Post Title'
            className='px-4 py-2 outline-none'
          />
          <input type='file' className='px-4' />
          <div className='flex flex-col'>
            <div className='flex items-center space-x-4 md:space-x-8'>
              <input
                type='text'
                value={cat}
                onChange={(e) => setCat(e.target.value)}
                placeholder='Enter Post Category'
                className='px-4 py-2 outline-none'
              />
              <div
                onClick={addCategory}
                className='bg-black text-white px-4 py-2 font-semibold cursor-pointer'
              >
                Add
              </div>
            </div>
            {/* category  */}
            <div className='flex px-4 mt-3'>
              {cats?.map((c, i) => (
                <div
                  key={i}
                  className='flex justify-center items-center space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-md'
                >
                  <p>{c}</p>
                  <p
                    onClick={() => deleteCategory(i)}
                    className='text-white bg-black rounded-full cursor-pointer p-1 text-sm'
                  >
                    <ImCross />
                  </p>
                </div>
              ))}
            </div>
          </div>
          <textarea
            name=''
            id=''
            placeholder='Enter Post Description'
            cols={30}
            rows={15}
            className='px-4 py-2 outline-none'
          ></textarea>
          <button className='bg-black text-white w-full md:w-[20%] mx-auto font-semibold px-4 py-2 text-lg md:text-xl'>
            Create
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default CreatePost;
